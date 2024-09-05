import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { DeviceService } from './demo/service/device.service';
import { UserService } from './demo/service/user.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './demo/service/auth-interceptor';
import { ToolbarModule } from 'primeng/toolbar';
import { HomeService } from './demo/service/home.service';
import { BreakerService } from './demo/service/breaker.service';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule, ToastModule, BadgeModule, ToolbarModule, CommonModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        DeviceService, UserService, ProductService, MessageService, HomeService, ConfirmationService, BreakerService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
