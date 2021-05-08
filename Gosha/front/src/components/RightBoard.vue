<template>
  <div class="right-board">
    <div v-if="!isTeatrEmpty">
      <div>Id: {{ teatr.id }}</div>
      <div>Наименование учреждения: {{ teatr.shortName }}</div>
      <div>Должность руководителя:: {{ teatr.chiefPosition }}</div>
      <div>Фио руководителя: {{ teatr.chiefName }}</div>
      <div>Сайт: {{ teatr.website }}</div>
    </div>
    <div v-else class="right-board__no-selected">
      Выберите театр из предложенного списка
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBoard",
  props: {
    teatr: {
      type: Object,
      required: true
    }
  },
  computed: {
    isTeatrEmpty() {
      return Object.keys(this.teatr).length === 0;
    }
  },
  methods: {
    yesNo(value) {
      if (value) {
        return "+";
      } else {
        return "-";
      }
    }
  }
};
</script>

<style scoped>
.right-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--dark_100);
}

.right-board .right-board__no-selected {
  font-size: 26px;
  text-align: center;
}
</style>
