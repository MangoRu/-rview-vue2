<template>
	<div>
		<common-desc-components-content
				title="FormCreate 动态表单"
				name="r-form-create"
				desc="form-create JSON动态表单"
				:api-table-list="computeApiTableList"
		>
			<div id="basic-form-create">
				<custom-content-code-examples code-title="基础用法" @on-click-copy="copy('#form-create-md')">
					<template #codeDesc>
						<div class="m-top-5">
							基于
							<a href="http://www.form-create.com/" target="_blank"> form-create文档 </a>
							的简单封装 <br/>
							<span style="color: #dd4a68">
                建议自定义Form表单(使用自己熟悉的表单方式)，如若使用该组件，则需提前了解 form-create
              </span>
						</div>
					</template>
					<template #codeExample>
						<r-panel>
							<r-form-create :rule="computeRule" @on-submit="handleSubmit"></r-form-create>
						</r-panel>
					</template>
					<form-create-md id="form-create-md"></form-create-md>
				</custom-content-code-examples>
			</div>
		</common-desc-components-content>
	</div>
</template>

<script>
	import CommonDescComponentsContent from 'views/desc/common/CommonDescComponentsContent'
	import CustomContentCodeExamples from 'components/rview/CustomContentCodeExamples'
	import FormCreateMd from 'assets/md/r-form-create.md'
	import {copy} from 'utils/toolkit';

	export default {
		name: 'DescComponentsFormCreate',
		components: {CommonDescComponentsContent, CustomContentCodeExamples, FormCreateMd},
		computed: {
			computeRule() {
				return [
					{
						type: 'radio',
						title: '类型',
						field: 'codeType',
						value: '0',
						options: [
							{value: '0', label: '系统生成'},
							{value: '1', label: '自定义'}
						],
						validate: [{required: true, message: '请选择类型', trigger: 'change'}],
						control: [
							{
								handle(val) {
									return val === '0'
								},
								rule: [
									{
										type: 'InputNumber',
										title: '该批次可兑换次数',
										field: 'singleCodeUseNumber',
										value: 1,
										props: {
											placeholder: '请输入该批次可兑换次数'
										},
										validate: [
											{required: true, type: 'number', message: '该批次可兑换次数为必填项！'}
										]
									}
								]
							},
							{
								handle(val) {
									return val === '1'
								},
								rule: [
									{
										type: 'input',
										title: '自定义兑换码',
										field: 'giftCode',
										value: '',
										props: {
											placeholder: '请输入自定义兑换码，限制36个字符'
										},
										validate: [{required: true, message: '自定义兑换码为必填项！', trigger: 'blur'}]
									}
								]
							}
						]
					},
					{
						type: 'InputNumber',
						title: '兑换码数量',
						field: 'codeNumber',
						value: null,
						props: {
							placeholder: '请输入生成兑换码的数量'
						},
						validate: [{required: true, type: 'number', message: '兑换码数量为必填项！'}]
					}
				]
			},
			formCreateEventsDataCompute() {
				return [
					{name: 'on-value', desc: '表单值的回调函数', returnValue: 'value'},
					{name: 'on-submit', desc: '表单提交事件的回调函数', returnValue: 'value'}
				]
			},
			formCreatePropsDataCompute() {
				return [
					{attr: 'rule', desc: '表单配置规则', type: 'Array', defaultValue: '[ ]'},
					{
						attr: 'option',
						desc: '表单option配置',
						type: 'Object',
						defaultValue: ' {\n' + '          form: { labelWidth: 210 }\n' + '        }'
					},
					{
						attr: 'isShowSubmit',
						desc: '是否显示默认提交按钮',
						type: 'Boolean',
						defaultValue: 'true'
					}
				]
			},
			computeApiTableList() {
				return [
					{title: 'FormCreate', type: 'props', data: this.formCreatePropsDataCompute},
					{title: 'FormCreate', type: 'events', data: this.formCreateEventsDataCompute}
				]
			}
		},
		methods: {
			copy,
			handleSubmit(value) {
				this.$Message.success('提交表单值 ' + JSON.stringify(value))
			}
		}
	}
</script>

<style scoped></style>
