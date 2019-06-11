<template>
    <div class="blankli">
        <label class="left">{{ title }}</label>
        <div class="right"><slot></slot></div>
    </div>
</template>
<script>
export default {
    props: { title: String },

    data() {
        return {};
    },
    methods: {
        setCurrent(item) {
            // console.log(item)
            this.$emit('fatherMethod', item);
        }
    }
};
</script>
<style lang="less" scoped>
.blankli {
    width: 100%;
    display: flex;
    min-height: 110px;
    align-items: center;
    font-size: 30px;
    border-bottom: 1px solid #e6e6e6;
    padding: 15px 0;
    color: #000;
    &:last-child {
        border-bottom: none;
    }
    .left {
        width: 220px;
        font-size: 32px;
    }
    .right {
        flex: 1;
    }
}
</style>
