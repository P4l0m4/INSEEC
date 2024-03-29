<script setup>
import { ref, onMounted, computed } from "vue";
import { groupBy } from "@/utils/groupBy.js";
import { sortArray } from "@/utils/sortArray";
const story = await useAsyncStoryblok("events", { version: "published" });

const dayjs = useDayjs();
const currentMonthWithYear = dayjs().format("YYYY-MM");

const monthsRef = ref();
const displayedEvents = ref([]);

let selected = ref();
let hasScrolled = ref(false);

//by default, display all the events of the current month
onMounted(() => {
  const startIndex = Object.keys(eventsGroupedByMonth.value).indexOf(
    currentMonthWithYear
  );

  window.addEventListener("scroll", () => {
    if (
      hasScrolled.value === false &&
      window.scrollY >= 300 &&
      window.scrollY <= 450
    ) {
      setTimeout(() => {
        selectDotAndScroll(
          eventsGroupedByMonth.value[currentMonthWithYear],
          startIndex
        );
      }, 500);
    }
  });
});

function selectDotAndScroll(events, index) {
  hasScrolled.value = true;

  selected.value = index;
  let selectedDot = monthsRef.value[index];
  displayedEvents.value = events;

  if (index === Object.keys(eventsGroupedByMonth.value).length - 1) {
    return;
  }

  selectedDot?.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

let eventsGroupedByMonth = computed(() => {
  const events = story.value.content.calendar.map((event) => ({
    ...event,
    monthByYear: dayjs(event.date).format("YYYY-MM"),
  }));

  const groupedEvents = groupBy(events, "monthByYear");
  return sortArray(groupedEvents);
});

//jsonld
story.value.content.calendar.forEach((event) => {
  useJsonld(() => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    image: event.image.filename,
    startDate: dayjs(event.date).format("YYYY[-]MM[-]DD[T]HH[:]mm"),
    eventStatus: "https://schema.org/EventScheduled",
    performer: {
      "@type": "PerformingGroup",
      name: "INSEEC Chambéry",
    },
  }));
});
</script>
<template>
  <Container>
    <div class="calendar">
      <div class="calendar__dots">
        <div
          v-for="(calendarEvent, date, index) in eventsGroupedByMonth"
          :key="index"
          class="calendar__dots__dot"
          ref="monthsRef"
          :class="{
            'calendar__dots__dot--selected': selected === index,
          }"
          @click="selectDotAndScroll(calendarEvent, index)"
        >
          <span class="calendar__dots__dot__number">
            {{ dayjs(date).format("MM") }}
          </span>
          {{ dayjs(date).format("MMMM").substring(0, 3) }}
        </div>
      </div>

      <div class="calendar__events">
        <div v-for="event in displayedEvents" class="calendar__events__event">
          <img
            class="calendar__events__event__img"
            :src="event.image.filename"
            alt="evenement calendrier inseec"
          />
          <div class="calendar__events__event__txt">
            <div class="calendar__events__event__txt__first-line">
              <span class="calendar__events__event__txt__first-line__title">{{
                event.title
              }}</span>
              <span class="calendar__events__event__txt__first-line__date">{{
                dayjs(event.date).format("DD MMMM")
              }}</span>
            </div>
            <span class="calendar__events__event__txt__subtitle">{{
              event.description
            }}</span>
            <div class="calendar__events__event__txt__time-and-place">
              <span class="calendar__events__event__txt__time-and-place__time"
                ><img src="@/assets/icons/schedule.svg" alt="icon location" />{{
                  dayjs(event.date).format("HH[h]mm")
                }}</span
              >
              <NuxtLink
                class="calendar__events__event__txt__time-and-place__place"
                :to="event.maps.url"
                target="_blank"
                ><img src="@/assets/icons/distance.svg" alt="icon location" />{{
                  event.location
                }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div></Container
  >
</template>
<style lang="scss" scoped>
.calendar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  position: relative;
  height: fit-content;

  &::before {
    content: "";
    width: 80px;
    height: 110px;
    position: absolute;
    left: 0;
    pointer-events: none;

    @media (min-width: $big-tablet-screen) {
      width: 200px;
    }

    background: linear-gradient(
      90deg,
      rgba($base-color, 1) 0%,
      rgba($base-color, 0) 100%
    );
    z-index: 1;
  }
  &::after {
    content: "";
    width: 80px;
    height: 110px;
    position: absolute;
    right: 0;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      rgba($base-color, 0) 0%,
      rgba($base-color, 1) 100%
    );
    @media (min-width: $big-tablet-screen) {
      width: 200px;
    }
  }

  &__dots {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: 100%;
    height: 110px;
    overflow-x: scroll;

    @media (min-width: $big-tablet-screen) {
      gap: 6rem;
    }

    &__dot {
      position: relative;
      width: 100px;
      height: 100px;
      min-width: 100px;
      min-height: 100px;
      border-radius: 50%;
      background-color: $primary-color;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      box-shadow: $shadow;
      cursor: pointer;
      font-size: calc($titles / 2);
      font-weight: $skinny-thick;
      transition:
        background-color 0.2s,
        color 0.2s,
        box-shadow 0.2s,
        font-weight 0.2s;

      &--selected {
        background-color: $secondary-color;
        color: $primary-color;
        box-shadow: $shadow-secondary;
        font-weight: $skinny;
      }

      &__number {
        position: absolute;
        inset: 0;
        margin: auto;
        font-size: $titles;
        font-weight: $overweight;
        height: fit-content;
        width: fit-content;
        opacity: 0.1;
      }
    }
  }

  &__events {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(343px, 1fr));
    place-items: center;
    gap: 2rem;
    width: 100%;
    height: fit-content;

    @media (min-width: $big-tablet-screen) {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }

    @media (min-width: $desktop-screen) {
      grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    }

    &__event {
      background-color: $primary-color;
      border-radius: $radius;
      box-shadow: $shadow;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 600px;
      animation: popUp 0.4s ease;

      @media (min-width: $tablet-screen) {
        flex-direction: row;
        height: fit-content;
        max-height: 192px;
        align-items: space-between;
      }

      @media (min-width: $big-tablet-screen) {
        max-width: inherit;
      }

      &__img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        border-radius: $radius $radius 0 0;

        @media (min-width: $tablet-screen) {
          height: 192px;
          width: 100px;
          border-radius: $radius 0 0 $radius;
        }
        @media (min-width: $desktop-screen) {
          width: 150px;
        }
      }

      &__txt {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        width: 100%;
        justify-content: space-between;

        &__first-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.25rem;
          opacity: 0.6;

          &__title {
            font-weight: $thick;
            font-size: 1rem;
            color: $secondary-color;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          &__date {
            font-size: $base-text;
            font-weight: $overweight;
            color: $secondary-color;
            width: fit-content;
            white-space: nowrap;

            &--past {
              text-decoration: line-through;
              text-decoration-thickness: 4px;
              text-decoration-color: $secondary-color-faded;
            }
          }
        }

        &__subtitle {
          font-size: calc($base-text + 0.25rem);
          font-weight: $skinny-thick;
        }
        &__time-and-place {
          display: flex;
          gap: 1rem;
          justify-content: space-between;
          align-items: flex-end;
          height: 100%;
          width: 100%;

          &__time {
            font-size: $base-text;
            font-weight: $overweight;
            opacity: 0.6;
            color: $secondary-color;
            display: flex;
            align-items: center;

            & img {
              width: 24px;
              height: 24px;
            }
          }

          &__place {
            display: flex;
            opacity: 0.6;
            font-size: 1rem;
            font-weight: $skinny-thick;
            color: $secondary-color;
            text-decoration: underline;
            align-items: center;

            & img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
