import { groupBy } from '~/utils/groupBy'; import { groupBy } from
'~/utils/groupBy';
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { groupBy } from "@/utils/groupBy.js";
const story = await useAsyncStoryblok("events", { version: "published" });

const dayjs = useDayjs();
const currentMonthWithYear = dayjs().format("YYYY-MM");
const currentMonth = dayjs().format("MM");
const currentYear = dayjs().format("YYYY");

const monthsRef = ref();
const displayedEvents = ref([]);

let selected = ref();

//by default, display all the events of the current month
onMounted(() => {
  const startIndex = Object.keys(eventsGroupedByMonth.value).indexOf(
    currentMonthWithYear
  );
  setTimeout(() => {
    selectDotAndScroll(
      eventsGroupedByMonth.value[currentMonthWithYear],
      startIndex
    );
  }, 500);
});

function selectDotAndScroll(events, index: number) {
  selected.value = index;
  let selectedDot = monthsRef.value[index];
  selectedDot?.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
  displayedEvents.value = events;
}

let eventsGroupedByMonth = computed(() => {
  const events = story.value.content.calendar.map((event) => ({
    ...event,
    monthByYear: dayjs(event.date).format("YYYY-MM"),
  }));
  //   const groupedEvents = Object.groupBy(
  //     events,
  //     ({ monthByYear }) => monthByYear
  //   );
  //   return sortEvents(groupedEvents);
  const groupedEvents = Object.groupBy(events, (event) => event.monthByYear);

  return sortEvents(groupedEvents);
});

function sortEvents(events) {
  return Object.keys(events)
    .sort()
    .reduce((sortedEvents, key) => {
      sortedEvents[key] = events[key];
      return sortedEvents;
    }, {});
}
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
            <div class="calendar__events__event__txt__title">
              {{ event.title }}
              <span class="calendar__events__event__txt__title__date">{{
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

  &::before {
    content: "";
    width: 120px;
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
    width: 120px;
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

    @media (min-width: $big-tablet-screen) {
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    }

    &__event {
      background-color: $primary-color;
      border-radius: $radius;
      box-shadow: $shadow;
      display: flex;
      flex-direction: column;
      align-items: space-between;
      width: 100%;
      height: 100%;
      max-width: 600px;
      animation: popUp 0.4s ease;

      @media (min-width: $tablet-screen) {
        flex-direction: row;
      }

      &__img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: $radius $radius 0 0;

        @media (min-width: $tablet-screen) {
          width: 100px;
          height: inherit;
          align-self: stretch;
          border-radius: $radius 0 0 $radius;
        }
      }

      &__txt {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        width: 100%;
        height: 100%;
        justify-content: space-between;

        &__title {
          font-weight: $thick;
          display: flex;
          justify-content: space-between;

          &__date {
            font-size: $base-text;
            font-weight: $overweight;
            opacity: 0.6;
            color: $secondary-color;

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
          margin-top: 1rem;

          &__time {
            font-size: $base-text;
            font-weight: $overweight;
            opacity: 0.6;
            color: $secondary-color;
            height: 100%;
            display: flex;

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
