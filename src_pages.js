import admin_business_projects__layout_svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\admin\[business]\projects\_layout.svelte'
import admin_business_projects_index_svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\admin\[business]\projects\index.svelte'
import admin_business_projects_edit_svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\admin\[business]\projects\edit.svelte'
import admin_business_person__svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\admin\[business]\[person].svelte'
import admin_business_projects_svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\admin\[business]\projects'
import admin_business__layout_svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\admin\[business]\_layout.svelte'
import admin_business_index_svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\admin\[business]\index.svelte'
import admin_business__svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\admin\[business]'
import admin_index_svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\admin\index.svelte'
import _layout_svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\_layout.svelte'
import index_svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\index.svelte'
import admin_svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\admin'
import about_svelte from 'C:\Users\jakob\sandbox\svelte\svelte-routes-generator\src\pages\about.svelte'


 export const pages = [
   {
  "name": "_layout",
  "ext": "svelte",
  "basePath": "/admin/[business]/projects/_layout",
  "params": [
    ""
  ],
  "regex": null,
  "dir": false,
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects\\_layout.svelte",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "admin_business_projects__layout"
}
   {
  "name": "index",
  "ext": "svelte",
  "basePath": "/admin/[business]/projects/index",
  "params": [
    ""
  ],
  "regex": "/admin/([^/]+)/projects/index",
  "dir": false,
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects\\index.svelte",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "admin_business_projects_index"
}
   {
  "name": "edit",
  "ext": "svelte",
  "basePath": "/admin/[business]/projects/edit",
  "params": [
    ""
  ],
  "regex": "/admin/([^/]+)/projects/edit",
  "dir": false,
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects\\edit.svelte",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "admin_business_projects_edit"
}
   {
  "name": "[person]",
  "ext": "svelte",
  "basePath": "/admin/[business]/[person]",
  "params": [
    "",
    ""
  ],
  "regex": "/admin/([^/]+)/([^/]+)",
  "dir": false,
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\[person].svelte",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "admin_business_person_"
}
   {
  "name": "projects",
  "ext": null,
  "basePath": "/admin/[business]/projects",
  "params": [
    ""
  ],
  "regex": "/admin/([^/]+)/projects",
  "dir": [
    {
      "name": "_layout",
      "ext": "svelte",
      "basePath": "/admin/[business]/projects/_layout",
      "params": [
        ""
      ],
      "regex": null,
      "dir": false,
      "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects\\_layout.svelte",
      "layouts": [
        "_layout",
        "admin_business__layout",
        "admin_business_projects__layout"
      ],
      "key": "admin_business_projects__layout"
    },
    {
      "name": "index",
      "ext": "svelte",
      "basePath": "/admin/[business]/projects/index",
      "params": [
        ""
      ],
      "regex": "/admin/([^/]+)/projects/index",
      "dir": false,
      "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects\\index.svelte",
      "layouts": [
        "_layout",
        "admin_business__layout",
        "admin_business_projects__layout"
      ],
      "key": "admin_business_projects_index"
    },
    {
      "name": "edit",
      "ext": "svelte",
      "basePath": "/admin/[business]/projects/edit",
      "params": [
        ""
      ],
      "regex": "/admin/([^/]+)/projects/edit",
      "dir": false,
      "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects\\edit.svelte",
      "layouts": [
        "_layout",
        "admin_business__layout",
        "admin_business_projects__layout"
      ],
      "key": "admin_business_projects_edit"
    }
  ],
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "admin_business_projects"
}
   {
  "name": "_layout",
  "ext": "svelte",
  "basePath": "/admin/[business]/_layout",
  "params": [
    ""
  ],
  "regex": null,
  "dir": false,
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\_layout.svelte",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "admin_business__layout"
}
   {
  "name": "index",
  "ext": "svelte",
  "basePath": "/admin/[business]/index",
  "params": [
    ""
  ],
  "regex": "/admin/([^/]+)/index",
  "dir": false,
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\index.svelte",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "admin_business_index"
}
   {
  "name": "[business]",
  "ext": null,
  "basePath": "/admin/[business]",
  "params": [
    ""
  ],
  "regex": "/admin/([^/]+)",
  "dir": [
    {
      "name": "[person]",
      "ext": "svelte",
      "basePath": "/admin/[business]/[person]",
      "params": [
        "",
        ""
      ],
      "regex": "/admin/([^/]+)/([^/]+)",
      "dir": false,
      "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\[person].svelte",
      "layouts": [
        "_layout",
        "admin_business__layout",
        "admin_business_projects__layout"
      ],
      "key": "admin_business_person_"
    },
    {
      "name": "projects",
      "ext": null,
      "basePath": "/admin/[business]/projects",
      "params": [
        ""
      ],
      "regex": "/admin/([^/]+)/projects",
      "dir": [
        {
          "name": "_layout",
          "ext": "svelte",
          "basePath": "/admin/[business]/projects/_layout",
          "params": [
            ""
          ],
          "regex": null,
          "dir": false,
          "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects\\_layout.svelte",
          "layouts": [
            "_layout",
            "admin_business__layout",
            "admin_business_projects__layout"
          ],
          "key": "admin_business_projects__layout"
        },
        {
          "name": "index",
          "ext": "svelte",
          "basePath": "/admin/[business]/projects/index",
          "params": [
            ""
          ],
          "regex": "/admin/([^/]+)/projects/index",
          "dir": false,
          "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects\\index.svelte",
          "layouts": [
            "_layout",
            "admin_business__layout",
            "admin_business_projects__layout"
          ],
          "key": "admin_business_projects_index"
        },
        {
          "name": "edit",
          "ext": "svelte",
          "basePath": "/admin/[business]/projects/edit",
          "params": [
            ""
          ],
          "regex": "/admin/([^/]+)/projects/edit",
          "dir": false,
          "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects\\edit.svelte",
          "layouts": [
            "_layout",
            "admin_business__layout",
            "admin_business_projects__layout"
          ],
          "key": "admin_business_projects_edit"
        }
      ],
      "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects",
      "layouts": [
        "_layout",
        "admin_business__layout",
        "admin_business_projects__layout"
      ],
      "key": "admin_business_projects"
    },
    {
      "name": "_layout",
      "ext": "svelte",
      "basePath": "/admin/[business]/_layout",
      "params": [
        ""
      ],
      "regex": null,
      "dir": false,
      "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\_layout.svelte",
      "layouts": [
        "_layout",
        "admin_business__layout",
        "admin_business_projects__layout"
      ],
      "key": "admin_business__layout"
    },
    {
      "name": "index",
      "ext": "svelte",
      "basePath": "/admin/[business]/index",
      "params": [
        ""
      ],
      "regex": "/admin/([^/]+)/index",
      "dir": false,
      "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\index.svelte",
      "layouts": [
        "_layout",
        "admin_business__layout",
        "admin_business_projects__layout"
      ],
      "key": "admin_business_index"
    }
  ],
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "admin_business_"
}
   {
  "name": "index",
  "ext": "svelte",
  "basePath": "/admin/index",
  "regex": "/admin/index",
  "dir": false,
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\index.svelte",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "admin_index"
}
   {
  "name": "_layout",
  "ext": "svelte",
  "basePath": "/_layout",
  "regex": null,
  "dir": false,
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\_layout.svelte",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "_layout"
}
   {
  "name": "index",
  "ext": "svelte",
  "basePath": "/index",
  "regex": "/index",
  "dir": false,
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\index.svelte",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "index"
}
   {
  "name": "admin",
  "ext": null,
  "basePath": "/admin",
  "regex": "/admin",
  "dir": [
    {
      "name": "[business]",
      "ext": null,
      "basePath": "/admin/[business]",
      "params": [
        ""
      ],
      "regex": "/admin/([^/]+)",
      "dir": [
        {
          "name": "[person]",
          "ext": "svelte",
          "basePath": "/admin/[business]/[person]",
          "params": [
            "",
            ""
          ],
          "regex": "/admin/([^/]+)/([^/]+)",
          "dir": false,
          "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\[person].svelte",
          "layouts": [
            "_layout",
            "admin_business__layout",
            "admin_business_projects__layout"
          ],
          "key": "admin_business_person_"
        },
        {
          "name": "projects",
          "ext": null,
          "basePath": "/admin/[business]/projects",
          "params": [
            ""
          ],
          "regex": "/admin/([^/]+)/projects",
          "dir": [
            {
              "name": "_layout",
              "ext": "svelte",
              "basePath": "/admin/[business]/projects/_layout",
              "params": [
                ""
              ],
              "regex": null,
              "dir": false,
              "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects\\_layout.svelte",
              "layouts": [
                "_layout",
                "admin_business__layout",
                "admin_business_projects__layout"
              ],
              "key": "admin_business_projects__layout"
            },
            {
              "name": "index",
              "ext": "svelte",
              "basePath": "/admin/[business]/projects/index",
              "params": [
                ""
              ],
              "regex": "/admin/([^/]+)/projects/index",
              "dir": false,
              "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects\\index.svelte",
              "layouts": [
                "_layout",
                "admin_business__layout",
                "admin_business_projects__layout"
              ],
              "key": "admin_business_projects_index"
            },
            {
              "name": "edit",
              "ext": "svelte",
              "basePath": "/admin/[business]/projects/edit",
              "params": [
                ""
              ],
              "regex": "/admin/([^/]+)/projects/edit",
              "dir": false,
              "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects\\edit.svelte",
              "layouts": [
                "_layout",
                "admin_business__layout",
                "admin_business_projects__layout"
              ],
              "key": "admin_business_projects_edit"
            }
          ],
          "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\projects",
          "layouts": [
            "_layout",
            "admin_business__layout",
            "admin_business_projects__layout"
          ],
          "key": "admin_business_projects"
        },
        {
          "name": "_layout",
          "ext": "svelte",
          "basePath": "/admin/[business]/_layout",
          "params": [
            ""
          ],
          "regex": null,
          "dir": false,
          "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\_layout.svelte",
          "layouts": [
            "_layout",
            "admin_business__layout",
            "admin_business_projects__layout"
          ],
          "key": "admin_business__layout"
        },
        {
          "name": "index",
          "ext": "svelte",
          "basePath": "/admin/[business]/index",
          "params": [
            ""
          ],
          "regex": "/admin/([^/]+)/index",
          "dir": false,
          "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]\\index.svelte",
          "layouts": [
            "_layout",
            "admin_business__layout",
            "admin_business_projects__layout"
          ],
          "key": "admin_business_index"
        }
      ],
      "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\[business]",
      "layouts": [
        "_layout",
        "admin_business__layout",
        "admin_business_projects__layout"
      ],
      "key": "admin_business_"
    },
    {
      "name": "index",
      "ext": "svelte",
      "basePath": "/admin/index",
      "regex": "/admin/index",
      "dir": false,
      "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin\\index.svelte",
      "layouts": [
        "_layout",
        "admin_business__layout",
        "admin_business_projects__layout"
      ],
      "key": "admin_index"
    }
  ],
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\admin",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "admin"
}
   {
  "name": "about",
  "ext": "svelte",
  "basePath": "/about",
  "regex": "/about",
  "dir": false,
  "file": "C:\\Users\\jakob\\sandbox\\svelte\\svelte-routes-generator\\src\\pages\\about.svelte",
  "layouts": [
    "_layout",
    "admin_business__layout",
    "admin_business_projects__layout"
  ],
  "key": "about"
}
]