import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./control-side-panel.scss?inline";
import { useNavigate } from "@builder.io/qwik-city";
import { Routes } from "~/routes/routes";

interface ListItem {
  title: string;
  id: number;
  route: string;
}
export const ControlSidePanel = component$(() => {
  useStylesScoped$(styles);

  const navigate = useNavigate();
  const listItems: ListItem[] = [
    {
      title: 'Record Memo',
      id: 0,
      route: '/record-log'
    },
    {
      title: 'Memo Archive',
      id: 1,
      route: '/memo-archive'
    },
    {
      title: 'Notification Setup',
      id: 2,
      route: '/notification-setup'
    }
  ];

  const navigateAction = $((listItem: ListItem) => {
      navigate(`${Routes.HOME_ROUTE}${listItem.route}`);
  })

  return (
    <aside class="h-screen">
      <img src="/assets/logo.png" alt="logo image" />
      <ul class="pt-5">
        {listItems.map(item => (
          <li
            onClick$={() => navigateAction(item)}
            class="p-5 cursor-pointer transition ease-out duration-200"
            key={item.id}>{item.title}
          </li>
        ))}
      </ul>
      <img src="/assets/family.svg" alt="family illustration"></img>
    </aside>
  )
})