<template>
  <div v-if="showMask" class="mask">
    <div class="content">
      <span class="close iconfont iconclose" @click="closeMask"></span>
      <ul>
        <li class="item" v-for="item in option" :key="item.value" @click="change(item)">
          {{item.name}}
          <span
            :class="['iconfont',item.value==current?'iconxuanzhong':'iconweixuanzhong']"
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Radio, Group, PopupRadio } from "vux";
export default {
  components: {
    Radio,
    Group,
    PopupRadio
  },
  props: {
    showMask: {
      type: Boolean,
      default: () => false
    },
    current: String,
    option: {
      type: Array,
      default: [
        {
          name: "001",
          value: "radio001"
        },
        {
          name: "002",
          value: "radio002"
        }
      ]
    }
  },

  methods: {
    change(data) {
      this.$emit('changeDate',data)
    },
    closeMask(){
      this.$emit('closeMask')
    }
  }
};
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  .content {
    width: 60%;
    position: absolute;
    left: 50%;
    top: 45%;

    transform: translate(-50%, -50%);

    background: #ffffff;
    border-radius: 5px;
    ul {
      height: 100%;
      overflow-y: auto;
      max-height: 60vh;
    }
    .close {
      position: absolute;
      left: 50%;
      top: -90px;
      color: #ffffff;
      z-index: 999;
      width: 60px;
      height: 60px;
      display: inline-block;
      border-radius: 50%;
      background-color: rgba(0,0,0,0.5);
      text-align: center;
      line-height: 60px;
      margin-left: -30px;
      
    }
    .item {
      padding: 20px;
      border-bottom: 1px solid #e6e6e6;
      font-size: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .iconfont {
        margin-right: 15px;
      }
      .iconxuanzhong {
        color: #1fa2fd;
      }
    }
  }
}
</style>
