import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { HtmlcssjavascriptComponent } from './basics/htmlcssjavascript/htmlcssjavascript.component';
import { UsingCssComponent } from './basics/htmlcssjavascript/using-css.component';

/**
 * The constant variable `routes` specifies how our SPA (Single Page Application) handles different 'pages'. There are two required parts and several
 * optional ones. 
 * 
 * ******REMEMBER******
 *  if you remember only one thing from the notes here (i hope you learn more), let it be this. The *thing* that makes a SPA a SPA is the router.
 * 
 * ****Required****
 * path: string
 *  the path value needs to be what you want a user to put in the URL to get to the content. These are things like /home, /admin, /workorder, etc.
 *  Notice that there is not a proceeding `/` in front of the paths. This is because it looks for the relative path. If we want to go to some sub-path
 *  inside of a route (like /workorders/parts) we can either write `workorders/parts` or we can use child routes, which will be explained on another module.
 * 
 * component: componentName
 *  while the path is what your users will put in, the component is where the router will direct the path too. The component holds the html and css template values
 *  and tells Angular how to act.
 * 
 * 
 * ***Optional***
 * pathMatch : string
 *  there are several options for pathmatch. You can go to the docs at angular.io to see all of them.
 *  pathMatch: 'full' means that the path thats put in has to match 100%. I have mainly used it with
 *  blank path to redirect to my main component.
 * 
 * rediredTo: string (path)
 *  redirects you to some other site/page/component/path. Use this to redirect from depricated SPA pages, send someone
 *  to an external site, or make some typo assumptions (home, hom, hom e, etc gets redirected to /home)
 * 
 * childRoutes : object array
 *  use childRoutes when you have a secondary router or sub-pages for some other set of your application. Child routes have a
 *  similar layout to standard routes, they are just inside the parent route. for example:
 *    ***Example***
 *  {
 *    path: admin,
 *    component: AdminComponent,
 *    childRoutes = [
 *                    {
 *                      path: usage,
 *                      component: UsageComponent
 *                    }
 *                  ]
 *    }
 * 
 *  using the above setup would send you to /admin/usage or, the usage sub-page under the parent admin page/route.
 */
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'basics',
    component: HtmlcssjavascriptComponent,
    children: [
      {
        path: 'cssInfo',
        component: UsingCssComponent
      }
    ]
  },

//This needs to be last, This says anything that is not a path above, get redirected to X component.
  {
    path: '**',
    redirectTo: '/welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
