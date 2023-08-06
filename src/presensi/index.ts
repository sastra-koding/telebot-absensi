import { MenuTemplate } from 'grammy-inline-menu';
import { MainContext } from '../context';
import { backButtons } from '../menu-general';
import { Router } from '@grammyjs/router';

const menu = new MenuTemplate<MainContext>((ctx) => 'Menu Presensi');

menu.interact(() => 'Check in', 'check-in', {
  do: async (ctx, path) => {
    const data = await fetch(
      'https://64ccda982eafdcdc851a5f76.mockapi.io/users',
    );

    console.log(path);

    return '../../settings';
  },
});

menu.manualRow(backButtons);

export default menu;
