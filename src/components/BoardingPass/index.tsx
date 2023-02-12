import styles from './styles.module.scss'

export function BoardingPass() {
	return (
		<div className={styles.container}>
			<div className={styles.Header}>
				<div>
					<span>Voo</span>
					<span>Data</span>
				</div>
				<div>
					<strong>LA8952</strong>
					<strong>25/04/2023</strong>
				</div>
				<div>
					<span>São Paulo, BR</span>
					<span>Milão, IT</span>
				</div>
				<div>
					<strong className={styles.initial}>GRU</strong>
					<img src="public/airplane.svg" alt="" />
					<strong className={styles.initial}>MXP</strong>
				</div>
				<div>
					<span>17:00</span>
					<span>10:30</span>
				</div>
			</div>
			<hr />
			<div className={styles.main}>
				<div>
					<span>Passageiro</span>
					<strong>Leandro Campos</strong>
				</div>
				<div>
					<span>Assento</span>
					<strong>25F</strong>
				</div>
			</div>
			<hr />
			<div className={styles.footer}>
				<div className={styles.footerMain}>
					<div className={styles.dados}>
					<div>
							<div>
								<span>Embarque</span>
							</div>
							<div className={styles.bgColor}>
								<strong>16:50</strong>
							</div>
						</div>
						<div>
							<div>
								<span>Terminal</span>
							</div>
							<div>
								<strong>2</strong>
							</div>
						</div>
						<div>
							<div>
								<span>Portão</span>
							</div>
							<div>
								<strong>15</strong>
							</div>
						</div>
					</div>
					<div className={styles.qrcode}>
						<img src="public/qrcode.svg" alt="" />
						<span>Grupo de Embarque: 3</span>
					</div>
				</div>
				<div className={styles.danger}>
					<strong>Atenção:</strong><span> o portão fecha 16:45</span>
				</div>
			</div>
		</div>
	)
}