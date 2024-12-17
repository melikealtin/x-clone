<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import HomeIcon from "@/assets/icons/sidebar-icons/home.svg";
import ActiveHomeIcon from "@/assets/icons/sidebar-icons/active-home.svg";
import ExploreIcon from "@/assets/icons/sidebar-icons/explore-icon.svg";
import ActiveExploreIcon from "@/assets/icons/sidebar-icons/active-explore-icon.svg";
import NotificationIcon from "@/assets/icons/sidebar-icons/notification-icon.svg";
import ActiveNotificationIcon from "@/assets/icons/sidebar-icons/active-notification-icon.svg";
import MessagesIcon from "@/assets/icons/sidebar-icons/messages-icon.svg";
import ActiveMessagesIcon from "@/assets/icons/sidebar-icons/active-messages-icon.svg";
import GrokIcon from "@/assets/icons/sidebar-icons/grok-icon.svg";
import ActiveGrokIcon from "@/assets/icons/sidebar-icons/active-grok-icon.svg";
import CommunitiesIcon from "@/assets/icons/sidebar-icons/communities-icon.svg";
import ActiveCommunitiesIcon from "@/assets/icons/sidebar-icons/active-communities-icon.svg";
import PremiumIcon from "@/assets/icons/logo.svg";
import ProfileIcon from "@/assets/icons/sidebar-icons/profile-icon.svg";
import ActiveProfileIcon from "@/assets/icons/sidebar-icons/active-profile-icon.svg";
import Button from "@/components/Share/Button.vue";
import SidebarMoreMenu from "@/components/Sidebar/SidebarMoreMenu.vue";

const route = useRoute();

const menuItems = [
  {
    name: "Home",
    path: "/home",
    icon: HomeIcon,
    activeIcon: ActiveHomeIcon,
  },
  {
    name: "Explore",
    path: "/explore",
    icon: ExploreIcon,
    activeIcon: ActiveExploreIcon,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: NotificationIcon,
    activeIcon: ActiveNotificationIcon,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: MessagesIcon,
    activeIcon: ActiveMessagesIcon,
  },
  {
    name: "Grok",
    path: "/grok",
    icon: GrokIcon,
    activeIcon: ActiveGrokIcon,
  },
  {
    name: "Communities",
    path: "/communities",
    icon: CommunitiesIcon,
    activeIcon: ActiveCommunitiesIcon,
  },
  {
    name: "Premium",
    path: "/premium",
    icon: PremiumIcon,
    activeIcon: PremiumIcon,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: ProfileIcon,
    activeIcon: ActiveProfileIcon,
  },
];

const isActive = (path) => route.path === path;
</script>

<template>
  <nav class="mt-0.5">
    <ul>
      <li v-for="item in menuItems" :key="item.name" class="block group">
        <router-link :to="item.path">
          <div
            class="p-3 rounded-full transition-colors inline-flex flex items-center gap-5 group-hover:bg-[#eff3f41a]"
          >
            <component
              :is="isActive(item.path) ? item.activeIcon : item.icon"
              class="w-[24px] h-[24px]"
            />
            <div
              class="pr-4 text-xl"
              :class="{ 'font-bold': route.path === item.path }"
            >
              {{ item.name }}
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </nav>

  <SidebarMoreMenu />

  <div class="py-4 w-[85%]">
    <Button size="large">Post</Button>
  </div>
</template>
