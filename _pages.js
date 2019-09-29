import _admin_business_projects__layout from './src/pages/admin/[business]/projects/_layout.svelte'
import _admin_business_projects_index from './src/pages/admin/[business]/projects/index.svelte'
import _admin_business_projects_edit from './src/pages/admin/[business]/projects/edit.svelte'
import _admin_business_person_ from './src/pages/admin/[business]/[person].svelte'
import _admin_business__layout from './src/pages/admin/[business]/_layout.svelte'
import _admin_business_index from './src/pages/admin/[business]/index.svelte'
import _admin_index from './src/pages/admin/index.svelte'
import __layout from './src/pages/_layout.svelte'
import _index from './src/pages/index.svelte'
import _about from './src/pages/about.svelte'


 export const pages = [
{
  "layouts": [
    __layout,
    _admin_business__layout,
    _admin_business_projects__layout
  ],
  "path": "/admin/[business]/projects/index",
  "component": _admin_business_projects_index,
  "paramKeys": [
    "business"
  ],
  "regex": "/admin/([^/]+)/projects",
  "name": "projects/index"
},
{
  "layouts": [
    __layout,
    _admin_business__layout,
    _admin_business_projects__layout
  ],
  "path": "/admin/[business]/projects/edit",
  "component": _admin_business_projects_edit,
  "paramKeys": [
    "business"
  ],
  "regex": "/admin/([^/]+)/projects/edit",
  "name": "projects/edit"
},
{
  "layouts": [
    __layout,
    _admin_business__layout
  ],
  "path": "/admin/[business]/[person]",
  "component": _admin_business_person_,
  "paramKeys": [
    "business",
    "person"
  ],
  "regex": "/admin/([^/]+)/([^/]+)",
  "name": "business/person"
},
{
  "layouts": [
    __layout,
    _admin_business__layout
  ],
  "path": "/admin/[business]/index",
  "component": _admin_business_index,
  "paramKeys": [
    "business"
  ],
  "regex": "/admin/([^/]+)",
  "name": "business/index"
},
{
  "layouts": [
    __layout
  ],
  "path": "/admin/index",
  "component": _admin_index,
  "regex": "/admin",
  "name": "admin/index"
},
{
  "layouts": [
    __layout
  ],
  "path": "/index",
  "component": _index,
  "regex": "",
  "name": "/index"
},
{
  "layouts": [
    __layout
  ],
  "path": "/about",
  "component": _about,
  "regex": "/about",
  "name": "/about"
}
]