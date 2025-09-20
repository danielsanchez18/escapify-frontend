import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutDashboard, LucideAngularModule, Users, Store, Crown, UserLock, ClipboardMinus, Activity, Headset, MessageCircle, Bell, Cog, Settings, MapPinHouse, UserCog } from 'lucide-angular';

@Component({
  selector: 'component-company-shared-navbar',
  imports: [
    RouterModule,
    LucideAngularModule
  ],
  templateUrl: './navbar.component.html',
})
export class ComponentCompanySharedNavbar {

  readonly LayoutDashboard = LayoutDashboard;
  readonly Store = Store;
  readonly MapPinHouse = MapPinHouse;
  readonly Users = Users;
  readonly UserCog = UserCog;
  readonly UserLock = UserLock;
  readonly Crown = Crown;
  readonly ClipboardMinus = ClipboardMinus;
  readonly Activity = Activity;
  readonly Headset = Headset;
  readonly MessageCircle = MessageCircle;
  readonly Bell = Bell;
  readonly Settings = Settings;

  links = [
    { href: "dashboard", text: "Overview", icon: LayoutDashboard },
    { href: "sucursales", text: "Sucursales", icon: MapPinHouse },
    { href: "clientes", text: "Clientes", icon: Users },
    { href: "trabajadores", text: "Trabajadores", icon: UserCog },
    { href: "roles", text: "Roles y Permisos", icon: UserLock },
    { href: "reportes", text: "Reportes", icon: ClipboardMinus },
    { href: "auditoria", text: "Auditoría", icon: Activity },
    { href: "soporte", text: "Soporte", icon: Headset },
    { href: "configuracion", text: "Configuración", icon: Settings },
  ];


}
