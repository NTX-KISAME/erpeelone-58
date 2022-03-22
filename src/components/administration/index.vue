<template>
  <!-- administration -->
  <div class="adminis-box">
    <div class="titleAndLogo">
      <i class="icon fa-solid fa-user-group"></i>
      <p class="title">{{ $t('adminisView.adminisTitle') }}</p>
    </div>
    <div class="containers">
      <div class="content-wrap">
        <div v-for="member in memberList" class="card">
          <div class="card-content-vertical">
            <div class="card-head">
              <img :src="member.profileImage" class="profile-img" alt="profile-image">
              <div class="profileInfo">
                <a :href="member.githubLink ? member.githubLink : '/'">
                <p class="name">{{ member.name }}</p>
                </a>
                <p class="role">{{ member.role }}</p>
              </div>
            </div>
            <div class="card-body">
              <div class="profileDescription">
                <p class="descriptitle">{{ $t('adminisView.descriptionTitle') }}</p>
                <p class="descripcontent">{{ member.profileDescription ? member.profileDescription : $t('adminisView.noDescription') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contributor -->
    <div class="titleAndLogo">
      <i class="icon fa-solid fa-users"></i>
      <p class="title">{{ $t('adminisView.Contributor') }}</p>
    </div>
    <div class="containers">
      <div class="content-wrap">
        <div v-for="member in contribute" class="card">
          <div class="card-content-vertical">
            <div class="card-head">
              <img :src="member.profileImage" class="profile-img" alt="profile-image">
              <div class="profileInfo">
                <a :href="member.githubLink">
                <p class="name">{{ member.name }}</p>
                </a>
                <p class="role">{{ member.role }}</p>
              </div>
            </div>
            <div class="card-body">
              <div class="profileDescription">
                <p class="descriptitle">{{ $t('adminisView.descriptionTitle') }}</p>
                <p class="descripcontent">{{ member.profileDescription ? member.profileDescription : $t('adminisView.noDescription') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import administration from '@/data/administration/memberlist.json'
import contributor from '@/data/contributor/memberList.json'
export default {
  name: "index",
  // Alternative from "data()" api
  setup() {
    let memberList = administration.classAdministrator
    let contribute = contributor.contributor
    return {memberList, contribute}
  }
}
</script>

<style scoped>
.titleAndLogo {
  @apply flex justify-center items-center pt-20 text-white gap-2
}
.icon {
  @apply text-4xl
}
.title {
  @apply text-4xl font-normal
}
.descriptitle {
  @apply text-white font-bold
}
.profileDescription {
  @apply grid p-1 auto-rows-min
}
.card-body {
  @apply flex
}
.adminis-box {
  @apply flex bg-neutral-900 h-full flex-col
}
.containers {
  @apply flex ml-28 mr-28 justify-center
}
.content-wrap {
  @apply flex gap-3 flex-wrap justify-center pt-14 pb-20 h-2/4
}
.card {
  @apply flex p-4 bg-neutral-800 rounded drop-shadow-md w-2/5
}
.card-content-vertical {
  @apply flex flex-col gap-2
}
.card-head {
  @apply flex gap-4 items-center
}
.profile-img {
  @apply w-24 h-24 rounded-full shadow-md
}
.profileInfo {
  @apply grid auto-rows-min
}
.name {
  @apply text-white font-bold text-2xl
}
.role {
  @apply text-gray-400 font-light
}
</style>