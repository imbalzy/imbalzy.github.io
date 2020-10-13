<template>
  <div>
    <p class="display-1 text--primary" style="text-align: center">
      Welcome to Peter(Zhengyan) Lyu's personal website
    </p>
    <div>
      <p class="display-1 text--primary">About me</p>
      I am a first year computer science master at Brown University. I am
      looking for a software engineering internship position in summer 2021. I
      am experienced in both front-end and back-end development. My primary
      research interest lies in the overlapping field between cv and nlp. If you
      think I am a good fit, please contant me via
      <a href="mailto:zhengyan_lyu@brown.edu">zhengyan_lyu@brown.edu</a>.
    </div>
    <br />
    <v-divider />
    <br />
    <div>
      <p class="display-1 text--primary">Skills</p>
      <div class="row">
        <div class="col">
          <p class="headline text--primary">Languages</p>
          <div>
            <div class="title">Python</div>
            <v-progress-linear value="90" height="18" color="grey"
              >{{ 90 }}%</v-progress-linear
            >
          </div>
          <div>
            <div class="title">JavaScript/TyepScript/CSS/HTML</div>
            <v-progress-linear value="80" height="18" color="grey"
              >{{ 80 }}%</v-progress-linear
            >
          </div>
          <div>
            <div class="title">Java</div>
            <v-progress-linear value="80" height="18" color="grey"
              >{{ 80 }}%</v-progress-linear
            >
          </div>
          <div>
            <div class="title">SQL</div>
            <v-progress-linear value="70" height="18" color="grey"
              >{{ 70 }}%</v-progress-linear
            >
          </div>
          <div>
            <div class="title">C/C++</div>
            <v-progress-linear value="50" height="18" color="grey"
              >{{ 50 }}%</v-progress-linear
            >
          </div>
          Other languages: Lisp, Delphi/Object Pascal (the first language I
          studyed 11 years ago)
        </div>
        <div class="col">
          <p class="headline text--primary">Packages/Frameworks/Systems</p>
          <div>
            <div class="title">Vue (which is used here)</div>
            <v-progress-linear value="90" height="18" color="grey"
              >{{ 90 }}%</v-progress-linear
            >
          </div>
          <div>
            <div class="title">Git</div>
            <v-progress-linear
              value="90
          "
              height="18"
              color="grey"
              >{{ 90 }}%</v-progress-linear
            >
          </div>
          <div>
            <div class="title">Pytorch</div>
            <v-progress-linear value="85" height="18" color="grey"
              >{{ 85 }}%</v-progress-linear
            >
          </div>
          <div>
            <div class="title">TensorFlow (worse than Pytorch)</div>
            <v-progress-linear value="75" height="18" color="grey"
              >{{ 75 }}%</v-progress-linear
            >
          </div>
          <div>
            <div class="title">Linux</div>
            <v-progress-linear value="70" height="18" color="grey"
              >{{ 70 }}%</v-progress-linear
            >
          </div>
          Others: Node.js, Scikit-learn, Numpy
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome",
};
</script>
