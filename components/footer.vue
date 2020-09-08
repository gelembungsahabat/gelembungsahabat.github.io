<template>
  <div>
  <div class="footer flex flex-wrap justify-center ">
    <div class="flex-initial text-gray-700 text-center bg-gray-200 px-10 mx-10 rounded-lg py-2 m-10">
      <p class="text-bottom my-2 font-normal text-base">
        Social Media
      </p>
      <div class="flex">
        <a href="https://www.twitch.tv/" target="_blank">
        <img class="flex-initial mx-3 mt-3 my-1 icon-sosmed" src="../assets/images/twitch.svg" alt="haha">
        </a>
        <a href="https://web.facebook.com/iniwildan/" target="_blank">
        <img class="flex-initial mx-3 mt-3 my-1 icon-sosmed" src="../assets/images/facebook-f.svg" alt="hehe">
        </a>
        <a href="https://www.instagram.com/gelembungsahabat_/" target="_blank">
        <img class="flex-initial mx-3 mt-3 my-1 icon-sosmed" src="../assets/images/instagram.svg" alt="hoho">
        </a>
      </div>
    </div>
    <div class="flex-initial text-gray-700 text-center bg-gray-200 px-8 mx-10 rounded-lg py-2 m-10">
      <p class="text-bottom my-2 font-normal text-base">
        Community
      </p>
      <div class="flex">
        <a href="https://t.me/surabayadotpy" target="_blank">
        <img class="flex-initial mx-3 mb-1 logo-komunitas" src="../assets/images/logosbypy.png" alt="haha">
        </a>
      </div>
    </div>

    <div class="flex-initial text-gray-700 text-center bg-gray-200 px-8 mx-10 rounded-lg py-2 m-10">
      <p class="text-bottom my-2 font-normal text-base">
        Portfolio
      </p>
      <div class="flex">
        <a href="https://github.com/gelembungsahabat" target="_blank">
        <img class="flex-initial mx-4 mt-3 mb-1 icon-sosmed" src="../assets/images/icongithub.png" alt="haha">
        </a>
        <a href="https://gitlab.com/gelembungsahabat" target="_blank">
        <img class="flex-initial mx-4 mt-3 mb-1 icon-sosmed" src="../assets/images/icongitlab.png" alt="haha">
        </a>
      </div>
    </div>
  </div>
  <!-- <hr style="height:2px; border-width:0; color:black; background-color:rgb(209, 209, 209)"> -->
    <div class="bg-gray-200 py-5">
      <p class="text-gray-700 text-center py-2 font-bold text-md ">
        © 2020 Muhammad Wildan Nur Karim
      </p>
    </div>
    </div>
</template>

<style>
.footer{
  background: rgb(102, 98, 98);
  /* height: 200px; */
  /* background: rgb(209, 209, 209); */
}
.text-bottom{
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  color: #515155;
}
.flex .flex-wrap span{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  color: #515151;
}
.icon-sosmed {
  width: 30px;
  height: 30px;
}
.logo-komunitas {
  width: 160px;
  /* height: 40px; */
  object-fit: contain;
}
</style>
