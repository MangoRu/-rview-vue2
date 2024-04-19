<template>
  <div>
    <!--   FIXME $emit input 无关此处输入框 -->
    <label>
      <Input v-model="computeImageUrl" v-if="imageUrl" readonly />
    </label>
    <div style="display: flex" class="m-top-10">
      <div
        class="demo-upload-list"
        :style="{ width: width + 'px', height: width + 'px', lineHeight: width + 'px' }"
        v-for="(item, index) in computeShowUploadList"
        :key="index"
      >
        <template v-if="item.status === 'finished'">
          <img :src="item.url" alt="game-img" />
          <div class="demo-upload-list-cover">
            <Icon
              type="ios-eye-outline"
              style="justify-content: center"
              @click.native="visible = true"
            ></Icon>
            <Icon
              type="ios-trash-outline"
              style="justify-content: center"
              @click.native="handleDeleteImg"
            ></Icon>
          </div>
        </template>
        <template v-else>
          <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
      </div>
      <Upload
        ref="upload"
        :action="uploadUrl"
        :with-credentials="true"
        :show-upload-list="false"
        :format="['jpg', 'jpeg', 'png']"
        :on-success="handleUploadImgSuccess"
        :style="{ width: width + 'px', height: width + 'px', display: 'inline-block' }"
      >
        <div class="img-upload" :style="{ width: width + 'px', height: width + 'px' }">
          <Icon type="md-images" :size="width / 3"></Icon>
          <div class="img-text" :style="{ fontSize: width <= 80 ? '12px' : '14px' }">
            {{ `${imageUrl ? "重新上传" : "上传图片"}` }}
          </div>
        </div>
      </Upload>
    </div>
    <Modal v-model="visible" :footer-hide="true">
      <img :src="imageUrl" v-if="visible" alt="game-img" style="width: 100%" />
    </Modal>
  </div>
</template>
<script>
export default {
  name: "RImagesUpload",
  props: {
    uploadUrl: { type: String, default: "" },
    id: Number,
    value: { type: String, default: "" },
    width: { type: Number, default: 60 }
  },
  data() {
    return {
      uploadList: [],
      visible: false,
      imageUrl: ""
    }
  },
  computed: {
    computeImageUrl() {
      return JSON.stringify(this.$data.imageUrl)
    },
    computeShowUploadList() {
      let result = []
      // 当不存在value值时，已上传的列表中选取最后一个
      let fileList = this.$data.uploadList
      // 已上传的列表中选最后一个
      if (fileList.length > 0) {
        result.push(fileList[fileList.length - 1])
      }
      return result
    }
  },
  watch: {
    value: {
      handler(value) {
        this.$data.imageUrl = value
        this.initUploadList(value)
      },
      deep: true
    },
    imageUrl: {
      handler(url) {
        // FIXME 控制监听上传图片的值
        this.$emit("input", url)
      },
      deep: true
    }
  },
  methods: {
    handleDeleteImg() {
      this.$data.imageUrl = ""
      this.$data.uploadList = []
    },
    initUploadList(url) {
      let uploadList = this.$refs.upload.fileList
      this.$data.uploadList = uploadList
      if (url && url !== "" && uploadList.length === 0) {
        this.$data.uploadList = [
          {
            name: "image.png",
            percentage: 100,
            response: url,
            showProgress: false,
            size: 142213,
            status: "finished",
            // uid: 1642061569157,
            uid: -1,
            url: url
          }
        ]
      }
    },
    handleUploadImgSuccess(res, file) {
      file.url = res
      this.$data.imageUrl = res
      this.initUploadList(res)
    }
  },
  mounted() {
    this.$data.imageUrl = this.$props.value
    this.initUploadList(this.$data.imageUrl)
  }
}
</script>
<style lang="scss" scoped>
.demo-upload-list {
  display: inline-block;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}

.demo-upload-list img {
  width: 100%;
  height: 100%;
}

.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}

.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}

.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}

.img-upload {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: #fff;
  border: 1px dashed #dcdee2;
  border-radius: 4px;
  cursor: pointer;
}
</style>
