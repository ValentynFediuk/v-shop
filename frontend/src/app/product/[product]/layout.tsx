import styles from './layout/ProductLayout.module.scss'
import { ReactNode } from "react";

const ProductLayout = ({
	children,
}: {
	children: ReactNode,
}) => (
		<section className={styles.wrapper}>
			<div className={styles.card_wrapper}>
				{children}
			</div>
		</section>
	)

export default ProductLayout