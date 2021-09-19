<template>
  <div>
    <p class="display-1 text--primary">Peter's resume</p>
    <vue-pdf
      src="/resumes/Zhengyan Lyu resume 2021 full time.pdf"
      style="width:70%"
    ></vue-pdf>
  </div>
</template>

<script>
import vuePdf from "vue-pdf";
export default {
  name: "resume",
  components: {
    vuePdf
  }
};
</script>
