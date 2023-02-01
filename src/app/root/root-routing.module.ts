import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShellComponent } from "../core/containers/shell/shell.component";
import { LoginGuard } from "../core/guards/login.guard";

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'directives',
        loadChildren: () => import('../features/directives/directives.module').then(m => m.DirectivesModule)
      },
      {
        path: 'pipes',
        loadChildren: () => import('../features/pipes/pipes.module').then(m => m.PipesModule)
      },
      {
        path: 'rxjs',
        loadChildren: () => import('../features/rxjs/rxjs.module').then(m => m.RxjsModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('../features/forms/forms.module').then(m => m.FormsModule),
        canActivate: [LoginGuard],
      },
      {
        path: 'lifecycle',
        loadChildren: () => import('../features/lifecycle/lifecycle.module').then(m => m.LifecycleModule),
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class RootRoutingModule { }
