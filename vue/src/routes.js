// Pages
export default [
  // Index page
  {
    path: '/',
    // component: Home,
    asyncComponent: () => import('./pages/home.vue'),
    master(f7) {
      return f7.theme === 'aurora'
    },
  },
  // About page
  {
    path: '/about/',
    // component: About,
    asyncComponent: () => import('./pages/about.vue'),
  },
  // Left Panel
  {
    path: '/panel-left/',
    // component: PanelLeft,
    asyncComponent: () => import('./pages/panel-left.vue'),
  },
  // Right Panel
  {
    path: '/panel-right/',
    // component: PanelRight,
    asyncComponent: () => import('./pages/panel-right.vue'),
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-bg"></div>
          <div class="navbar-inner sliding">
            <div class="left">
              <a href="#" class="link back">
                <i class="icon icon-back"></i>
                <span class="if-not-md">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 1</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 1</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    path: '/panel-right-2/',
    content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-bg"></div>
          <div class="navbar-inner sliding">
            <div class="left">
              <a href="#" class="link back">
                <i class="icon icon-back"></i>
                <span class="if-not-md">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 2</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 2</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
  },

  // Components
  {
    path: '/accordion/',
    // component: Accordion,
    asyncComponent: () => import('./pages/accordion.vue'),
  },
  {
    path: '/action-sheet/',
    // component: ActionSheet,
    asyncComponent: () => import('./pages/action-sheet.vue'),
  },
  {
    path: '/appbar/',
    // component: Appbar,
    asyncComponent: () => import('./pages/appbar.vue'),
  },
  {
    path: '/area-chart/',
    // component: AreaChart,
    asyncComponent: () => import('./pages/area-chart.vue'),
  },
  {
    path: '/autocomplete/',
    // component: Autocomplete,
    asyncComponent: () => import('./pages/autocomplete.vue'),
  },
  {
    path: '/badge/',
    // component: Badge,
    asyncComponent: () => import('./pages/badge.vue'),
  },
  // {
  //   // path: '/breadcrumbs/',
  //   // component: Breadcrumbs,
  // },
  {
    path: '/buttons/',
    // component: Buttons,
    asyncComponent: () => import('./pages/buttons.vue'),
  },
  {
    path: '/calendar/',
    // component: Calendar,
    asyncComponent: () => import('./pages/calendar.vue'),
  },
  {
    path: '/calendar-page/',
    // component: CalendarPage,
    asyncComponent: () => import('./pages/calendar-page.vue'),
  },
  {
    path: '/cards/',
    // component: Cards,
    asyncComponent: () => import('./pages/cards.vue'),
  },
  {
    path: '/cards-expandable/',
    // component: CardsExpandable,
    asyncComponent: () => import('./pages/cards-expandable.vue'),
  },
  {
    path: '/checkbox/',
    // component: Checkbox,
    asyncComponent: () => import('./pages/checkbox.vue'),
  },
  {
    path: '/chips/',
    // component: Chips,
    asyncComponent: () => import('./pages/chips.vue'),
  },
  {
    path: '/color-picker/',
    // component: ColorPicker,
    asyncComponent: () => import('./pages/color-picker.vue'),
  },
  {
    path: '/contacts-list/',
    // component: ContactsList,
    asyncComponent: () => import('./pages/contacts-list.vue'),
  },
  {
    path: '/content-block/',
    // component: ContentBlock,
    asyncComponent: () => import('./pages/content-block.vue'),
  },
  {
    path: '/data-table/',
    // component: DataTable,
    asyncComponent: () => import('./pages/data-table.vue'),
  },
  {
    path: '/dialog/',
    // component: Dialog,
    asyncComponent: () => import('./pages/dialog.vue'),
  },
  {
    path: '/elevation/',
    // component: Elevation,
    asyncComponent: () => import('./pages/elevation.vue'),
  },
  {
    path: '/fab/',
    // component: Fab,
    asyncComponent: () => import('./pages/fab.vue'),
  },
  {
    path: '/fab-morph/',
    // component: FabMorph,
    asyncComponent: () => import('./pages/fab-morph.vue'),
  },
  {
    path: '/form-storage/',
    // component: FormStorage,
    asyncComponent: () => import('./pages/form-storage.vue'),
  },
  {
    path: '/gauge/',
    // component: Gauge,
    asyncComponent: () => import('./pages/gauge.vue'),
  },
  {
    path: '/grid/',
    // component: Grid,
    asyncComponent: () => import('./pages/grid.vue'),
  },
  {
    path: '/icons/',
    // component: Icons,
    asyncComponent: () => import('./pages/icons.vue'),
  },
  {
    path: '/infinite-scroll/',
    // component: InfiniteScroll,
    asyncComponent: () => import('./pages/infinite-scroll.vue'),
  },
  {
    path: '/inputs/',
    // component: Inputs,
    asyncComponent: () => import('./pages/inputs.vue'),
  },
  {
    path: '/lazy-load/',
    // component: LazyLoad,
    asyncComponent: () => import('./pages/lazy-load.vue'),
  },
  {
    path: '/list/',
    // component: List,
    asyncComponent: () => import('./pages/list.vue'),
  },
  {
    path: '/list-index/',
    // component: ListIndex,
    asyncComponent: () => import('./pages/list-index.vue'),
  },
  {
    path: '/login-screen/',
    // component: LoginScreen,
    asyncComponent: () => import('./pages/login-screen.vue'),
  },
  {
    path: '/login-screen-page/',
    // component: LoginScreenPage,
    asyncComponent: () => import('./pages/login-screen-page.vue'),
  },
  {
    path: '/menu/',
    // component: Menu,
    asyncComponent: () => import('./pages/menu.vue'),
  },
  {
    path: '/menu-list/',
    // component: MenuList,
    asyncComponent: () => import('./pages/menu-list.vue'),
  },
  {
    path: '/messages/',
    // component: Messages,
    asyncComponent: () => import('./pages/messages.vue'),
  },
  {
    path: '/navbar/',
    // component: Navbar,
    asyncComponent: () => import('./pages/navbar.vue'),
  },
  {
    path: '/navbar-hide-scroll/',
    // component: NavbarHideScroll,
    asyncComponent: () => import('./pages/navbar-hide-scroll.vue'),
  },
  {
    path: '/notifications/',
    // component: Notifications,
    asyncComponent: () => import('./pages/notifications.vue'),
  },
  {
    path: '/panel/',
    // component: Panel,
    asyncComponent: () => import('./pages/panel.vue'),
  },
  {
    path: '/photo-browser/',
    // component: PhotoBrowser,
    asyncComponent: () => import('./pages/photo-browser.vue'),
  },
  {
    path: '/picker/',
    // component: Picker,
    asyncComponent: () => import('./pages/picker.vue'),
  },
  {
    path: '/pie-chart/',
    // component: PieChart,
    asyncComponent: () => import('./pages/pie-chart.vue'),
  },
  {
    path: '/popup/',
    // component: Popup,
    asyncComponent: () => import('./pages/popup.vue'),
  },
  {
    path: '/popover/',
    // component: Popover,
    asyncComponent: () => import('./pages/popover.vue'),
  },
  {
    path: '/preloader/',
    // component: Preloader,
    asyncComponent: () => import('./pages/preloader.vue'),
  },
  {
    path: '/progressbar/',
    // component: Progressbar,
    asyncComponent: () => import('./pages/progressbar.vue'),
  },
  {
    path: '/pull-to-refresh/',
    // component: PullToRefresh,
    asyncComponent: () => import('./pages/pull-to-refresh.vue'),
  },
  {
    path: '/radio/',
    // component: Radio,
    asyncComponent: () => import('./pages/radio.vue'),
  },
  {
    path: '/range/',
    // component: Range,
    asyncComponent: () => import('./pages/range.vue'),
  },
  {
    path: '/searchbar/',
    // component: Searchbar,
    asyncComponent: () => import('./pages/searchbar.vue'),
  },
  {
    path: '/searchbar-expandable/',
    // component: SearchbarExpandable,
    asyncComponent: () => import('./pages/searchbar-expandable.vue'),
  },
  {
    path: '/sheet-modal/',
    // component: SheetModal,
    asyncComponent: () => import('./pages/sheet-modal.vue'),
  },
  {
    path: '/skeleton/',
    // component: Skeleton,
    asyncComponent: () => import('./pages/skeleton.vue'),
  },
  {
    path: '/smart-select/',
    // component: SmartSelect,
    asyncComponent: () => import('./pages/smart-select.vue'),
  },
  {
    path: '/sortable/',
    // component: Sortable,
    asyncComponent: () => import('./pages/sortable.vue'),
  },
  {
    path: '/stepper/',
    // component: Stepper,
    asyncComponent: () => import('./pages/stepper.vue'),
  },
  {
    path: '/subnavbar/',
    // component: Subnavbar,
    asyncComponent: () => import('./pages/subnavbar.vue'),
  },
  {
    path: '/subnavbar-title/',
    // component: SubnavbarTitle,
    asyncComponent: () => import('./pages/subnavbar-title.vue'),
  },
  {
    path: '/swiper/',
    // component: Swiper,
    asyncComponent: () => import('./pages/swiper.vue'),
    routes: [
      {
        path: 'swiper-horizontal/',
        // component: SwiperHorizontal,
        asyncComponent: () => import('./pages/swiper-horizontal.vue'),
      },
      {
        path: 'swiper-vertical/',
        // component: SwiperVertical,
        asyncComponent: () => import('./pages/swiper-vertical.vue'),
      },
      {
        path: 'swiper-space-between/',
        // component: SwiperSpaceBetween,
        asyncComponent: () => import('./pages/swiper-space-between.vue'),
      },
      {
        path: 'swiper-multiple/',
        // component: SwiperMultiple,
        asyncComponent: () => import('./pages/swiper-multiple.vue'),
      },
      {
        path: 'swiper-nested/',
        // component: SwiperNested,
        asyncComponent: () => import('./pages/swiper-nested.vue'),
      },
      {
        path: 'swiper-loop/',
        // component: SwiperLoop,
        asyncComponent: () => import('./pages/swiper-loop.vue'),
      },
      {
        path: 'swiper-3d-cube/',
        // component: Swiper3dCube,
        asyncComponent: () => import('./pages/swiper-3d-cube.vue'),
      },
      {
        path: 'swiper-3d-coverflow/',
        // component: Swiper3dCoverflow,
        asyncComponent: () => import('./pages/swiper-3d-coverflow.vue'),
      },
      {
        path: 'swiper-3d-flip/',
        // component: Swiper3dFlip,
        asyncComponent: () => import('./pages/swiper-3d-flip.vue'),
      },
      {
        path: 'swiper-fade/',
        // component: SwiperFade,
        asyncComponent: () => import('./pages/swiper-fade.vue'),
      },
      {
        path: 'swiper-scrollbar/',
        // component: SwiperScrollbar,
        asyncComponent: () => import('./pages/swiper-scrollbar.vue'),
      },
      {
        path: 'swiper-gallery/',
        // component: SwiperGallery,
        asyncComponent: () => import('./pages/swiper-gallery.vue'),
      },
      {
        path: 'swiper-custom-controls/',
        // component: SwiperCustomControls,
        asyncComponent: () => import('./pages/swiper-custom-controls.vue'),
      },
      {
        path: 'swiper-parallax/',
        // component: SwiperParallax,
        asyncComponent: () => import('./pages/swiper-parallax.vue'),
      },
      {
        path: 'swiper-lazy/',
        // component: SwiperLazy,
        asyncComponent: () => import('./pages/swiper-lazy.vue'),
      },
      {
        path: 'swiper-pagination-progress/',
        // component: SwiperPaginationProgress,
        asyncComponent: () => import('./pages/swiper-pagination-progress.vue'),
      },
      {
        path: 'swiper-pagination-fraction/',
        // component: SwiperPaginationFraction,
        asyncComponent: () => import('./pages/swiper-pagination-fraction.vue'),
      },
      {
        path: 'swiper-zoom/',
        // component: SwiperZoom,
        asyncComponent: () => import('./pages/swiper-zoom.vue'),
      },
    ],
  },
  {
    path: '/swipeout/',
    // component: Swipeout,
    asyncComponent: () => import('./pages/swipeout.vue'),
  },
  {
    path: '/tabs/',
    // component: Tabs,
    asyncComponent: () => import('./pages/tabs.vue'),
  },
  {
    path: '/tabs-static/',
    // component: TabsStatic,
    asyncComponent: () => import('./pages/tabs-static.vue'),
  },
  {
    path: '/tabs-animated/',
    // component: TabsAnimated,
    asyncComponent: () => import('./pages/tabs-animated.vue'),
  },
  {
    path: '/tabs-swipeable/',
    // component: TabsSwipeable,
    asyncComponent: () => import('./pages/tabs-swipeable.vue'),
  },
  {
    path: '/tabs-routable/',
    // component: TabsRoutable,
    asyncComponent: () => import('./pages/tabs-routable.vue'),
    tabs: [
      {
        path: '/',
        id: 'tab1',
        content: `
        <div class="block">
          <p>Tab 1 content</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>
        </div>
        `,
      },
      {
        path: '/tab2/',
        id: 'tab2',
        content: `
        <div class="block">
          <p>Tab 2 content</p>
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p>
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
        </div>
        `,
      },
      {
        path: '/tab3/',
        id: 'tab3',
        content: `
        <div class="block">
          <p>Tab 3 content</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
        </div>
        `,
      },
    ],
  },
  {
    path: '/text-editor/',
    // component: TextEditor,
    asyncComponent: () => import('./pages/text-editor.vue'),
  },
  {
    path: '/toast/',
    // component: Toast,
    asyncComponent: () => import('./pages/toast.vue'),
  },
  {
    path: '/toggle/',
    // component: Toggle,
    asyncComponent: () => import('./pages/toggle.vue'),
  },
  {
    path: '/toolbar-tabbar/',
    // component: ToolbarTabbar,
    asyncComponent: () => import('./pages/toolbar-tabbar.vue'),
    routes: [
      {
        path: 'tabbar/',
        // component: Tabbar,
        asyncComponent: () => import('./pages/tabbar.vue'),
      },
      {
        path: 'tabbar-labels/',
        // component: TabbarLabels,
        asyncComponent: () => import('./pages/tabbar-labels.vue'),
      },
      {
        path: 'tabbar-scrollable/',
        // component: TabbarScrollable,
        asyncComponent: () => import('./pages/tabbar-scrollable.vue'),
      },
      {
        path: 'toolbar-hide-scroll/',
        // component: ToolbarHideScroll,
        asyncComponent: () => import('./pages/toolbar-hide-scroll.vue'),
      },
    ],
  },
  {
    path: '/tooltip/',
    // component: Tooltip,
    asyncComponent: () => import('./pages/tooltip.vue'),
  },
  {
    path: '/timeline/',
    // component: Timeline,
    asyncComponent: () => import('./pages/timeline.vue'),
  },
  {
    path: '/timeline-vertical/',
    // component: TimelineVertical,
    asyncComponent: () => import('./pages/timeline-vertical.vue'),
  },
  {
    path: '/timeline-horizontal/',
    // component: TimelineHorizontal,
    asyncComponent: () => import('./pages/timeline-horizontal.vue'),
  },
  {
    path: '/timeline-horizontal-calendar/',
    // component: TimelineHorizontalCalendar,
    asyncComponent: () => import('./pages/timeline-horizontal-calendar.vue'),
  },
  {
    path: '/treeview/',
    // component: Treeview,
    asyncComponent: () => import('./pages/treeview.vue'),
  },
  {
    path: '/virtual-list/',
    // component: VirtualList,
    asyncComponent: () => import('./pages/virtual-list.vue'),
  },

  // Color Themes
  {
    path: '/color-themes/',
    // component: ColorThemes,
    asyncComponent: () => import('./pages/color-themes.vue'),
  },

  // Page Transitions
  {
    path: '/page-transitions/',
    // component: PageTransitions,
    asyncComponent: () => import('./pages/page-transitions.vue'),
  },
  {
    path: '/page-transitions/:effect/',
    // component: PageTransitionsEffect,
    asyncComponent: () => import('./pages/page-transitions-effect.vue'),
  },

  // Routable Modals
  {
    path: '/routable-modals/',
    // component: RoutableModals,
    asyncComponent: () => import('./pages/routable-modals.vue'),
    routes: [
      {
        path: 'popup/',
        popup: {
          // component: RoutablePopup,
          asyncComponent: () => import('./pages/routable-popup.vue'),
        },
      },
      {
        path: 'actions/',
        popup: {
          // component: RoutableActions,
          asyncComponent: () => import('./pages/routable-actions.vue'),
        },
      },
    ],
  },
  {
    path: '/master-detail/',
    // component: MasterDetailMaster,
    asyncComponent: () => import('./pages/master-detail-master.vue'),
    master: true,
    detailRoutes: [
      {
        path: '/master-detail/:id/',
        // component: MasterDetailDetail,
        asyncComponent: () => import('./pages/master-detail-detail.vue'),
      },
    ],
  },
  {
    path: '/store/',
    // component: Store,
    asyncComponent: () => import('./pages/store.vue'),
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    // component: NotFound,
    asyncComponent: () => import('./pages/404.vue'),
  },
]
