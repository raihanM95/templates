import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-module.strategy';
import { AuthModule } from './modules/auth/auth.module';
import { ClientModule } from './modules/client/client.module';

const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'client', loadChildren: './modules/client/client.module#ClientModule' },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), AuthModule, ClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
