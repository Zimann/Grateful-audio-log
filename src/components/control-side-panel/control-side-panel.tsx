import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./control-side-panel.scss?inline";

interface ListItem {
  title: string;
  id: number;
}
export const ControlSidePanel = component$(() => {
  useStylesScoped$(styles);

  const listItems: ListItem[] = [
    {
      title: 'Record Memo',
      id: 0
    },
    {
      title: 'Memo Archive',
      id: 1
    },
    {
      title: 'Notification Setup',
      id: 2
    }
  ];

  return (
    <aside class="h-screen">
      <img src="/assets/logo.png" alt="logo image" />
      <ul class="pt-5">
        {listItems.map(item => (
          <li class="p-5 cursor-pointer transition ease-out duration-200" key={item.id}>{item.title}</li>
        ))}
      </ul>
      <img src="/assets/family.svg" alt="family illustration"></img>
    </aside>
  )
})