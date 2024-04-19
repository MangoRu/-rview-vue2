<template>
	<div style="display: inline-block">
    <span class="m-right-10" v-for="(item, index) in selectList" :key="index">
      <span class="label-required" v-if="item.required"></span>
      <span class="m-right-10 search-label" v-text="item.label" v-if="isShowLabel"></span>
      <label>
        <Select
		        v-model="item.value"
		        :style="{ width: item.width ? item.width + 'px' : '160px' }"
		        :placeholder="`${item.placeholder ? item.placeholder : '请选择' + item.label}`"
		        filterable
		        transfer
		        not-found-text="`无数据`"
		        :clearable="item.clearable"
        >
          <Option v-for="option in item.options" :key="option.value" :value="option.value">
            {{ option.label }}
          </Option>
        </Select>
      </label>
    </span>
		<span class="m-right-10" v-for="item in inputList" :key="item.label">
      <span class="label-required" v-if="item.required">*</span>
      <span class="m-right-10 search-label" v-text="item.label" v-if="isShowLabel"></span>
      <label>
        <Input
		        v-model="item.value"
		        :style="{ width: item.width ? item.width + 'px' : '160px' }"
		        :placeholder="`${item.placeholder ? item.placeholder : '请输入' + item.label}`"
		        :clearable="item.clearable"
		        :disabled="item.readOnly"
        ></Input>
      </label>
    </span>
	</div>
</template>
<script>
	export default {
		name: 'RFormCustom',
		props: {
			selectList: {
				type: Array,
				default() {
					return []
				},
				required: true
			},
			inputList: {
				type: Array,
				default() {
					return []
				},
				required: true
			},
			isShowLabel: {type: Boolean, default: true}
		}
	}
</script>
<style lang="scss" scoped>
	.label-required {
		display: inline-block;
		margin-right: 4px;
		line-height: 1;
		font-family: SimSun, serif;
		font-size: 14px;
		color: #ed4014;
		font-weight: bolder;
	}

	.search-label {
		color: rgba(0, 0, 0, 0.75);
		font-weight: bolder;
	}
</style>
