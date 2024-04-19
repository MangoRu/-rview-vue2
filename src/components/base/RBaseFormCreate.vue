<template>
	<div>
		<form-create
				v-model="fApiProp"
				:rule="ruleProp"
				:option="optionProp"
				:value.sync="valueProp"
				@submit="(value) => $emit('on-submit', value)"
		></form-create>
	</div>
</template>
<script>
	import FormCreate from '@form-create/iview4'
	import Vue from 'vue'

	Vue.use(FormCreate)

	export default {
		name: 'RFormCreate',
		props: {
			rule: {
				type: Array,
				default: () => {
					return []
				}
			},
			option: {
				type: Object,
				default: () => {
					return {
						// submitBtn: true,
						form: {labelWidth: 210}
					}
				}
			},
			isShowSubmit: {type: Boolean, default: true}
		},
		data() {
			return {
				// 表单实例对象
				fApiProp: {},
				// 表单数据
				valueProp: {}
			}
		},
		computed: {
			optionProp() {
				let option = JSON.parse(JSON.stringify(this.$props.option))
				if (!this.$props.isShowSubmit) {
					option.submitBtn = false
				}
				return option
			},
			ruleProp() {
				if (this.$props.rule.length > 0) {
					// return JSON.parse(JSON.stringify(this.$props.rule))
					return this.$props.rule
				}
				return []
			}
		},
		watch: {
			valueProp: {
				handler(val) {
					this.$emit('on-value', val)
				},
				deep: true
			}
		},
		methods: {
			submit(resolve, reject) {
				return this.$data.fApiProp.submit(
						(formData, api) => {
							// 提交表单
							resolve(formData, api)
						},
						(api) => {
							// 验证未通过
							reject && reject(api)
						}
				)
			}
		}
	}
</script>
<style lang="scss" scoped>
	> > > .ivu-form .ivu-form-item-label {
		font-weight: bolder !important;
	}

	::v-deep .ivu-date-picker,
	::v-deep .ivu-input-number {
		width: 100%;
	}
</style>
