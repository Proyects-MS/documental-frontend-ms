import { useSelector } from 'react-redux';
import { BlogSvg, BonusUISvg, ButtonsSvg, CalanderSvg, ChartsSvg, ChatSvg, ContactSvg, EcommerceSvg, EditorsSvg, EmailSvg, FAQSvg, FilemanagerSvg, FormsSvg, GallarySvg, HeaderBookmarkSvg, HomeSvg, IconsSvg, JobsearchSvg, KanbanSvg, KnowledgebaseSvg, LearningSvg, MapsSvg, OthersSvg, ProjectSvg, SamplePageSvg, SearchResultSvg, SocialappSvg, SupportTicketSvg, TablesSvg, TaskSvg, TodoSvg, UiKitsSvg, UsersComponentSvg, WidgetsSvg } from '../../Data/svgIcons';

export const MENUITEMS = [
    {
        menutitle: 'Inicio',
        Items: [
            { path: `${process.env.PUBLIC_URL}/dashboard`, icon: HomeSvg, title: 'Inicio', type: 'link' }
        ]
    },
    {
        menutitle: 'Procesos',
        Items: [
            { path: `${process.env.PUBLIC_URL}/procesos`, icon: FilemanagerSvg, title: 'Procesos', type: 'link', id: 9 }
        ]
    },
    ///tipo de procesos ///
    {
        menutitle: 'Tipo de Procesos',
        Items: [
            { path: `${process.env.PUBLIC_URL}/Subprocesos`, icon:  BlogSvg , title: 'Tipo de Procesos', type: 'link', id: 10 }
        ]
    },
    {
        menutitle: 'Contratacion',
        Items: [
            { path: `${process.env.PUBLIC_URL}/contratacion`, icon: ButtonsSvg , title: 'Contratación', type: 'link', id: 10 }
        ]
    },
    {
        menutitle: 'Procedimientos',
        Items: [
            { path: `${process.env.PUBLIC_URL}/procedimiento`, icon: FilemanagerSvg , title: 'procedimientos', type: 'link', id: 10 }
        ]
    },

    {
        menutitle: 'Tareas',
        Items: [
            { path: `${process.env.PUBLIC_URL}/tareas`, icon: TaskSvg, title: 'Tareas', type: 'link' }
        ]
    },
    {
        menutitle: 'Respositorio',
        Items: [
            { path: `${process.env.PUBLIC_URL}/repositorio`, icon: HeaderBookmarkSvg, title: 'Repositorio', type: 'link', id: 19 }
        ]
    },

    // {
    //     menutitle: 'Plantillas',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}/template`, icon: JobsearchSvg, title: 'Plantillas', type: 'link', id: 19 }
    //     ]
    // },

    {
        menutitle: 'Herramientas',
        Items: [
            {
                title: 'Herramientas', icon: ButtonsSvg, type: 'sub', badge: false, active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/herramientas/usuarios`, title: 'Usuarios', type: 'link', id: 4 },
                    { path: `${process.env.PUBLIC_URL}/herramientas/roles`, title: 'Roles y Permisos', type: 'link', id: 0 },
                    { path: `${process.env.PUBLIC_URL}/herramientas/ajustes`, title: 'Ajustes', type: 'link', id: 27 },
                     { path: `${process.env.PUBLIC_URL}/herramientas/contratacion`, title: 'Contratacion', type: 'link', id: 28 },
                    // { path: `${process.env.PUBLIC_URL}herramientas/Subprocesos`, title: 'Tipo de Procesos', type: 'link', id: 29 },
                   {path: `${process.env.PUBLIC_URL}herramientas/Procedimiento`, title: 'Procedimientos', type: 'link', id: 28 },

                ] 
            },
        ]
    },
    // {
    //     menutitle: 'DashBoards',
    //     Items: [
    //         {
    //             title: 'Dashboards', icon: HomeSvg, type: 'sub', badge: true, active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Default', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, title: 'Ecommerce', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/dashboard/crypto`, title: 'Crypto', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Widgets',
    //     Items: [
    //         {
    //             title: 'Widgets', icon: WidgetsSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/widgets/general`, title: 'General', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Chart', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Project',
    //     Items: [
    //         {
    //             title: 'Project', icon: ProjectSvg, type: 'sub', badge1: true, active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/project/projectlist`, title: 'Project list', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/project/createlist`, title: 'Create list', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'File Manager',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}/filemanager`, bookmark: true, icon: FilemanagerSvg, title: 'File Manager', type: 'link' }
    //     ]
    // },
    // {
    //     menutitle: 'Kanban Board',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}/kanbanboard`, badge2: true, icon: KanbanSvg, title: 'Kanban Board', type: 'link' }
    //     ]
    // },
    // {
    //     menutitle: 'Ecommerce',
    //     Items: [
    //         {
    //             title: 'Ecommerce', icon: EcommerceSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/ecommerce/product`, title: 'Product', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ecommerce/productpage`, title: 'Product Page', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ecommerce/productlist`, title: 'Product List', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ecommerce/paymentdetails`, title: 'Payment Detail', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ecommerce/orderhistory`, title: 'Order History', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ecommerce/invoice`, title: 'Invoice', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ecommerce/cart`, title: 'Cart', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ecommerce/wishlist`, title: 'Wishlist', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ecommerce/checkout`, title: 'Checkout', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ecommerce/pricing`, title: 'Pricing', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Email',
    //     Items: [
    //         {
    //             title: 'Email', icon: EmailSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/email/mailbox`, title: 'Mail Box', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/email/readmail`, title: 'Read Mail', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/email/compose`, title: 'Compose', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Chat',
    //     Items: [
    //         {
    //             title: 'Chat', icon: ChatSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/chat/chatapp`, title: 'ChatApp', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/chat/videocall`, title: 'VideoCall', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Users',
    //     Items: [
    //         {
    //             title: 'Users', icon: UsersComponentSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/users/userprofile`, title: 'User Profile', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/users/useredit`, title: 'User Edit', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/users/usercard`, title: 'User Cards', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Bookmarks',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}/bookmarks`, icon: HeaderBookmarkSvg, title: 'Bookmarks', type: 'link' }
    //     ]
    // },
    // {
    //     menutitle: 'Contacts',
    //     Items: [
    //         {
    //             title: 'Contacts', icon: ContactSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/contacts`, type: 'link', title: 'Contacts' },
    //                 { path: `${process.env.PUBLIC_URL}/contacts/firebase`, type: 'link', title: 'Contact FireBase' },
    //             ]
    //         }
    //     ]
    // },
    // {
    //     menutitle: 'Tasks',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}/tasks`, bookmark: true, icon: TaskSvg, title: 'Tasks', type: 'link' }
    //     ]
    // },
    // {
    //     menutitle: 'Calander',
    //     Items: [
    //         {
    //             title: 'Calander', icon: CalanderSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/calandar/basic-calandar`, type: 'link', title: 'Calander' },
    //                 { path: `${process.env.PUBLIC_URL}/calandar/draggable-calandar`, type: 'link', title: 'Draggable' },
    //             ]
    //         }
    //     ]
    // },
    // {
    //     menutitle: 'Social App',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}/social-app`, bookmark: true, icon: SocialappSvg, title: 'Social App', type: 'link' }
    //     ]
    // },
    // {
    //     menutitle: 'To-Do',
    //     Items: [
    //         {
    //             title: 'To-Do', icon: TodoSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/todo`, title: 'To-Do', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/todofirebase`, title: 'To-Do Firebase', type: 'link' }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     menutitle: 'Search Result',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}/searchresult`, icon: SearchResultSvg, title: 'Search Result', type: 'link' }
    //     ]
    // },
    // {
    //     menutitle: 'Forms',
    //     Items: [
    //         {
    //             title: 'Forms', icon: FormsSvg, type: 'sub', active: false, children: [
    //                 {
    //                     title: ' Form Controls ', type: 'sub', children: [
    //                         { title: 'Form Validation', type: 'link', path: `${process.env.PUBLIC_URL}/forms-control/formValidation` },
    //                         { title: 'Basic Input', type: 'link', path: `${process.env.PUBLIC_URL}/forms-control/baseInput` },
    //                         { title: 'Checkbox & Radio', type: 'link', path: `${process.env.PUBLIC_URL}/forms-control/radioCheckbox` },
    //                         { title: 'Input Groups', type: 'link', path: `${process.env.PUBLIC_URL}/forms-control/inputGroup` },
    //                         { title: 'Mega Option', type: 'link', path: `${process.env.PUBLIC_URL}/forms-control/megaOptions` },

    //                     ]
    //                 },
    //                 {
    //                     title: 'Form Widgets', type: 'sub', children: [
    //                         { title: 'Date picker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/datepicker` },
    //                         // { title: 'Time picker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/timepicker` },
    //                         { title: 'Typeahead', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/typeahead` },

    //                         { title: 'Date Time Picker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/datetimepicker` },
    //                         { title: 'Date Rangepicker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/rangepicker` },
    //                         { title: 'TouchSpin', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/touchspin` },
    //                         { title: 'Select 2', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/select2` },
    //                         { title: 'Switch', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/switch` },
    //                         { title: 'ClipBoard', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/clipBoard` },
    //                     ]
    //                 },
    //                 {
    //                     title: 'Form Layout', type: 'sub', children: [
    //                         { path: `${process.env.PUBLIC_URL}/form-layout/formDefault`, title: 'Form Default', type: 'link' },
    //                         { path: `${process.env.PUBLIC_URL}/form-layout/formWizard`, title: 'Form Wizard', type: 'link' },
    //                     ]
    //                 },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Tables',
    //     Items: [
    //         {
    //             title: 'Tables', icon: TablesSvg, type: 'sub', active: false, children: [
    //                 {
    //                     title: 'Reactstrap Tables', type: 'sub', active: false, children: [
    //                         { path: `${process.env.PUBLIC_URL}/tables/basictable`, title: 'Basic Tables', type: 'link' },
    //                         { path: `${process.env.PUBLIC_URL}/tables/sizingtable`, title: 'Sizing Tables', type: 'link' },
    //                         { path: `${process.env.PUBLIC_URL}/tables/bordertable`, title: 'Border Tables', type: 'link' },
    //                         { path: `${process.env.PUBLIC_URL}/tables/stylingtable`, title: 'Styling Tables', type: 'link' },
    //                     ]
    //                 },
    //                 { path: `${process.env.PUBLIC_URL}/tables/datatable`, title: 'Data Tables', type: 'link' },
    //             ]
    //         },
    //     ]
    // },

    // {
    //     menutitle: 'Ui-Kits',
    //     Items: [
    //         {
    //             title: 'Ui-Kits', icon: UiKitsSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/typography`, title: 'Typography', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/avatar`, title: 'Avatars', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/helperclass`, title: 'Helper-Classes  ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/grid`, title: 'Grid', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/tagsandpills`, title: 'Tag & Pills', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/progress-bar`, title: 'Progress', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/modal`, title: 'Modal', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/alert`, title: 'Alert', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/popover`, title: 'Popover', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/tooltips`, title: 'Tooltip', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/spinner`, title: 'Spinners', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/dropdown`, title: 'Dropdown ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/accordion`, title: 'Accordion', type: 'link' },
    //                 {
    //                     title: 'Tabs', type: 'sub', children: [
    //                         { title: 'Bootstrap Tabs', type: 'link', path: `${process.env.PUBLIC_URL}/ui-kits/tab-bootstrap` },
    //                         { title: 'Line Tabs', type: 'link', path: `${process.env.PUBLIC_URL}/ui-kits/tab-line` },
    //                     ]
    //                 },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/shadow`, title: 'Shadow', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/ui-kits/list`, title: 'List', type: 'link' },
    //             ]
    //         }
    //     ]
    // },
    // {
    //     menutitle: 'Bonus Ui',
    //     Items: [
    //         {
    //             title: 'Bonus Ui', icon: BonusUISvg, type: 'sub', badge1: true, active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`, title: 'Scrollable ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/bootstrap-notify`, title: 'Bootstrap Notify ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/treeview`, title: 'Tree View', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/step`, title: 'Step', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/rating`, title: 'Rating', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/dropzone`, title: 'Dropzone', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/tourComponent`, title: 'Tour ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/sweetAlert`, title: 'SweetAlert ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/carousel`, title: 'Owl Carousel', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/ribbons`, title: 'Ribbons', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/pagination`, title: 'Pagination', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/breadcrumb`, title: 'Breadcrumb ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/rangeSlider`, title: 'Range Slider ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/imageCropper`, title: 'Image Cropper ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/stickyNotes`, title: 'Sticky ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/dragNDropComp`, title: 'Drag and Drop ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/image-upload`, title: 'Upload', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/card/basicCards`, title: 'Basic Card ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/card/creativeCards`, title: 'Creative Card ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/card/tabCard`, title: 'Tabbed Card ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/card/draggingCards`, title: 'Draggable Card', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/timelines/timeline1`, title: 'Timeline', type: 'link' }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Icons',
    //     Items: [
    //         {
    //             title: 'Icons', icon: IconsSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/icons/flagicon`, title: 'Flag Icon ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/icons/fontawesome`, title: 'Font Awesome', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/icons/ico`, title: 'Ico Icons', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/icons/thimify`, title: 'Thimify Icons', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/icons/feather`, title: 'Feather Icons', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/icons/wheater`, title: 'Wheater Icons', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Buttons',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}/button`, title: 'Buttons', icon: ButtonsSvg, type: 'link', active: false },
    //     ]
    // },
    // {
    //     menutitle: 'Charts',
    //     Items: [
    //         {
    //             title: 'Charts', icon: ChartsSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/charts/apex`, title: 'Apex Charts ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/charts/google`, title: 'Google Charts', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/charts/chartist`, title: 'Chartist Charts', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/charts/chartjs`, title: 'ChartJs Charts', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Sample Page',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}/sample-page`, icon: SamplePageSvg, title: 'Sample Page', type: 'link' }
    //     ]
    // },
    // {
    //     menutitle: 'Others',
    //     Items: [
    //         {
    //             title: 'Others', icon: OthersSvg, type: 'sub', active: false, children: [
    //                 {
    //                     title: 'Coming Soon', type: 'sub', children: [
    //                         { title: 'Coming Sample', type: 'link', path: `${process.env.PUBLIC_URL}/pages/coming/comingsimple` },
    //                         { title: 'Coming with Bg-Image', type: 'link', path: `${process.env.PUBLIC_URL}/pages/coming/comingbgimage` },
    //                     ]
    //                 },
    //                 {
    //                     title: 'Authentication', type: 'sub', children: [
    //                         { title: 'Login Simple', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-simple` },
    //                         { title: 'Login With bg image', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-img` },
    //                         { title: 'Login with image two', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-bg-img` },
    //                         { title: 'Login with validation', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-validation` },
    //                         { title: 'Login with tooltip', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-tooltip` },
    //                         { title: 'Login with sweetaleart', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-sweetalert` },
    //                         { title: 'Register Simple', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/register-simpleimg` },
    //                         { title: 'Register with Bg image', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/register-bg-img` },
    //                         { title: 'Register with Bg Video', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/register-video` },
    //                         { title: 'Unlock User', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/unlock-user` },
    //                         { title: 'Forgot Password', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/forget-pwd` },
    //                         { title: 'Create Passward', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/create-pwd` },
    //                         { title: 'Maintenance', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/maintenance` },
    //                     ]
    //                 },
    //                 {
    //                     title: 'Error', type: 'sub', children: [
    //                         { title: 'Error Page 1', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page1` },
    //                         { title: 'Error Page 2', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page2` },
    //                         { title: 'Error Page 3', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page3` },
    //                         { title: 'Error Page 4', type: 'link', path: `${process.env.PUBLIC_URL}/pages/error/error-page4` },
    //                     ]
    //                 },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Gallery',
    //     Items: [
    //         {
    //             title: 'Gallery', icon: GallarySvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/gallery/imageGallery`, title: 'Gallery Grid ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/gallery/imageWithDesc`, title: 'Gallery Grid  Desc ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/gallery/mesonryGallery`, title: 'Masonry Gallery', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/gallery/mesonryDesc`, title: 'Masonry With Desc', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/gallery/imageHover`, title: 'Hover Effect', type: 'link' }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Blog',
    //     Items: [
    //         {
    //             title: 'Blog', icon: BlogSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/blog/blogdetail`, title: 'Blog Details', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/blog/blogsingle`, title: 'Blog Single', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/blog/blogpost`, title: 'Add Post', type: 'link' },
    //             ]
    //         }
    //     ]
    // },
    // {
    //     menutitle: 'FAQ',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}/faq`, icon: FAQSvg, title: 'FAQ', type: 'link' }
    //     ]
    // },
    // {
    //     Items: [
    //         {
    //             title: 'Job Search', icon: JobsearchSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/jobSearch/cardView`, title: 'Cards View', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/jobSearch/job-list`, title: 'List View', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/jobSearch/job-detail`, title: 'Job Details', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/jobSearch/job-apply`, title: 'Apply', type: 'link' }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     Items: [
    //         {
    //             title: 'Learning', icon: LearningSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/learning/learning-list`, title: 'Learning List', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/learning/learning-detail`, title: 'Detail Course', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     Items: [
    //         {
    //             title: 'Maps', icon: MapsSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/mapsjs`, type: 'link', title: 'Google Map' },
    //                 { path: `${process.env.PUBLIC_URL}/leafletmap`, type: 'link', title: 'Leaflet Map' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     Items: [
    //         {
    //             title: 'Editor', icon: EditorsSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/editor/ckEditor`, type: 'link', title: 'CK  Editor' },
    //                 { path: `${process.env.PUBLIC_URL}/editor/mdeEditor`, type: 'link', title: 'MDE Editor' },
    //                 { path: `${process.env.PUBLIC_URL}/editor/ace-code-editor`, type: 'link', title: 'ACE code Editor ' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     Items: [
    //         {
    //             title: 'Knowledgebase', icon: KnowledgebaseSvg, type: 'sub', active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}/knowledgebase`, type: 'link', title: 'Knowledgebase' },
    //                 { path: `${process.env.PUBLIC_URL}/knowledgebase/knowledge-category`, type: 'link', title: 'Knowledge Category' },
    //                 { path: `${process.env.PUBLIC_URL}/knowledgebase/knowledge-details`, type: 'link', title: 'Knowledge details' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Support Ticket',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}/support-ticket`, icon: SupportTicketSvg, type: 'link', active: false, title: 'Support Ticket' },
    //     ]
    // },
];