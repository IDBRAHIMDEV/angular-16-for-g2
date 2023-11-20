import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'blog', component: ListPostsComponent },
  {path: 'blog/create', component: CreatePostComponent },
  {path: 'blog/edit/:id', component: EditPostComponent },
  {path: 'blog/:id', component: ShowPostComponent },
  {path: 'store', component: ListProductsComponent },
  {path: 'elearning', component: CoursesComponent },
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
