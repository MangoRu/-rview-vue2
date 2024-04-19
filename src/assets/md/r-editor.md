```html

<template>
	<div style="padding: 20px">
		<h3>富文本编辑器输入的内容值：</h3>
		<Input type="textarea" v-model="content" placeholder="这是是以下富文本编辑器的内容值" :rows="5"/>
		<r-editor :editor-height="300" @input="handleInputContent"></r-editor>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				content: null
			}
		},
		methods: {
			handleInputContent(content) {
				this.$data.content = content
			}
		}
	}
</script>
```
