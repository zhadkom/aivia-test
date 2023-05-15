<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <v-text-field
            v-model.number="sizeX"
            label="Size X"
            type="number"
            min="1"
            variant="plain"
            class="text-white"
        ></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-text-field
            variant="plain"
            class="text-white"
            v-model.number="sizeY"
            label="Size Y"
            type="number"
            min="1"
        ></v-text-field>
      </v-col>
    </v-row>
    <div>
      <div v-for="x in sizeX" :key="x" class="row">
        <div v-for="y in sizeY" :key="y" >
          <div class="box" :style="{ backgroundColor: getSquareStyle(x, y)}" @mouseover="toggleSquare(x, y)"></div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup() {
    const sizeX = ref(1)
    const sizeY = ref(1)
    const squares = reactive(['white'])

    const toggleSquare = (x, y) => {
      const index = (x - 1) * sizeY.value + y - 1
      squares[index] = squares[index] === 'white' ? 'blue' : 'white'
    }

    const getSquareStyle = (x, y) => {
      const index = (x - 1) * sizeY.value + y - 1
      return squares[index]
    }

    const redrawSquares = () => {
      squares.length = sizeX.value * sizeY.value
      squares.fill('white' )
    }

    return {
      sizeX,
      sizeY,
      squares,
      toggleSquare,
      getSquareStyle,
      redrawSquares
    }
  },
  watch: {
    sizeX() {
      this.redrawSquares()
    },
    sizeY() {
      this.redrawSquares()
    }
  }
}
</script>

<style>
.row {
  display: flex;
}

.box {
  width: 36px;
  height: 36px;
  transition: background-color ease-in .2s;
}
</style>