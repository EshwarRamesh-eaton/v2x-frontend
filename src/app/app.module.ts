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
import { MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './demo/service/auth-interceptor';
import { MobileFooterComponent } from './layout/mobile-footer/mobile-footer.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
    declarations: [AppComponent, NotfoundComponent, MobileFooterComponent],
    imports: [AppRoutingModule, AppLayoutModule, ToastModule, BadgeModule, ToolbarModule, CommonModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        DeviceService, UserService, ProductService, MessageService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
