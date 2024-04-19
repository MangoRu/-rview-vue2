```html

<template>
	<div style="padding: 20px">
		<r-panel>
			<r-form-create :rule="computeRule" @on-submit="handleSubmit"></r-form-create>
		</r-panel>
	</div>
</template>

<script>
	export default {
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
			}
		},
		methods: {
			handleSubmit(value) {
				this.$Message.success('提交表单值 ' + JSON.stringify(value))
			}
		}
	}
</script>
```
