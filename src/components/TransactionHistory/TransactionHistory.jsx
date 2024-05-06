import css from "./TransactionHistory.module.css";
import clsx from "clsx";

export default function TransactionHistory({ items }) {
    return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.thead_item}>Type</th>
          <th className={css.thead_item}>Amount</th>
          <th className={css.thead_item}>Currency</th>
        </tr>
      </thead>

  <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr key={id}>
            <td
              className={clsx(
                css.tbody_item,
                index % 2 === 0 ? null : css.even_color
              )}
            >
              {type}
            </td>
            <td
              className={clsx(
                css.tbody_item,
                index % 2 === 0 ? null : css.even_color
              )}
            >
              {amount}
            </td>
            <td
              className={clsx(
                css.tbody_item,
                index % 2 === 0 ? null : css.even_color
              )}
            >
              {currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};