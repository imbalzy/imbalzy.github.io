<template>
  <div>
    <p class="display-1 text--primary">Peter's Projects</p>
    My current research interest lies in the overlapping field between cv and
    nlp.

    <v-card class="mx-auto">
      <v-card-text>
        <p class="display-1 text--primary">
          Latent Space Arithmetic with Images and Texts
        </p>
        <div class="text--primary">
          In this work, I propose a novel framework for semantic face editing
          with words by interpreting the latent semantics learned by GANs. In
          this framework, I conduct a study on how words can be encoded in the
          latent space of GANs. I find that the word embedding latent space can
          be projected to the latent space of GANs with semantics. The
          projection is continuous, since the word vectors that are close in the
          word embedding space can have similar projection. In addition, my
          model is able to learns a disentangled representation of the word in
          the GAN latent space by linear transformations.

          <br />
          <v-img src="@/assets/face editing.png" width="50%"></v-img>
          <br />
          <v-img src="@/assets/sunglasses.png" width="50%"></v-img>
        </div>
      </v-card-text>
    </v-card>
    <br />
    <v-card class="mx-auto">
      <v-card-text>
        <p class="display-1 text--primary">Automatic Handgun Detection</p>
        <p>with Shiyu (Jenny) Su</p>
        <div class="text--primary">
          Our project tries to construct a real time automatic handgun detection
          model that could potentially be adopted for closed circuit television
          camera (CCTV).
          <br />We have fine tuned, trained, and tested our model over the
          handgun data set from Soft Computing and Intelligent Information
          Systems. The data set contains about 3000 images of guns with region
          proposals To minimize the impact of the size limitation of this data
          set, we implemented transfer learning
          <a href="https://arxiv.org/abs/1512.03385">ResNet</a> and data
          augmentation in our model. <br />We presented a poster in September
          2019 at Villanova University. Here are some figures from our poster:
          <br />
          <v-img src="@/assets/weapon1.png" width="50%"></v-img>
          <br />
          <v-img src="@/assets/weapon2.png" width="50%"></v-img>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "projects",
};
</script>
