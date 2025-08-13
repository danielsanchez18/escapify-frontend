import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutDashboard, LucideAngularModule, Users, Store, Crown, UserLock, ClipboardMinus, Activity, Headset, MessageCircle, Bell, Cog, Settings } from 'lucide-angular';

@Component({
  selector: 'component-core-shared-navbar',
  imports: [
    RouterModule,
    LucideAngularModule
  ],
  templateUrl: './navbar.component.html',
})
export class ComponentCoreSharedNavbar {

  readonly LayoutDashboard = LayoutDashboard;
  readonly Store = Store;
  readonly Users = Users;
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
    { href: "empresas", text: "Empresas", icon: Store },
    { href: "suscripciones", text: "Suscripciones", icon: Crown },
    { href: "usuarios", text: "Usuarios", icon: Users },
    { href: "roles", text: "Roles y Permisos", icon: UserLock },
    { href: "reportes", text: "Reportes", icon: ClipboardMinus },
    { href: "auditoria", text: "Auditoría", icon: Activity },
    { href: "soporte", text: "Soporte", icon: Headset },
    { href: "configuracion", text: "Configuración", icon: Settings },
  ];


}
