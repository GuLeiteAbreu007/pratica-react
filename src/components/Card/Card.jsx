import styles from './Card.module.css'

export default function Card({titulo1,titulo2,titulo3,check_path,x_path,preco1,preco2,preco3}){
    return(
        <div className={styles.cards}>
        <div className={styles.card}>
            <div className={styles.card_content}>
                <h1 className={styles.title}>{titulo1}</h1>
                <div className={styles.active_item}>
                    <img src={check_path} alt="texto"/>
                    <p>PNG Templates</p>
                </div>
                <div className={styles.desactive_item}>
                    <img src={x_path} alt="texto"/>
                    <p>Figma responsive components</p>
                </div>
                <div className={styles.desactive_item}>
                    <img src={x_path} alt="texto"/>
                    <p>Constant updates</p>
                </div>
                <div className={styles.desactive_item}>
                    <img src={x_path} alt="texto"/>
                    <p>Custom templates</p>
                </div>

                <div className={styles.preco}>
                    <h1>
                        ${preco1}
                    </h1>
                    <h6>
                    Per month
                    </h6>
                </div>

                <button className={styles.botao}>
                    <h2>try now</h2>
                </button>  

            </div>
                     
        </div>

        <div className={styles.card}>
            <div className={styles.card_content}>
                <h1 className={styles.title}>{titulo2}</h1>
                <div className={styles.active_item}>
                    <img src={check_path} alt="texto"/>
                    <p>PNG Templates</p>
                </div>
                <div className={styles.active_item}>
                    <img src={check_path} alt="texto"/>
                    <p>Figma responsive components</p>
                </div>
                <div className={styles.desactive_item}>
                    <img src={x_path} alt="texto"/>
                    <p>Constant updates</p>
                </div>
                <div className={styles.desactive_item}>
                    <img src={x_path} alt="texto"/>
                    <p>Custom templates</p>
                </div>

                <div className={styles.preco}>
                    <h1>
                        ${preco2}
                    </h1>
                    <h6>
                    Per month
                    </h6>
                </div>

                <button className={styles.botao}>
                    <h2>try now</h2>
                </button>  

            </div>
                     
        </div>

        <div className={styles.card}>
            <div className={styles.card_content}>
                <h1 className={styles.title}>{titulo3}</h1>
                <div className={styles.active_item}>
                    <img src={check_path} alt="texto"/>
                    <p>PNG Templates</p>
                </div>
                <div className={styles.active_item}>
                    <img src={check_path} alt="texto"/>
                    <p>Figma responsive components</p>
                </div>
                <div className={styles.active_item}>
                    <img src={check_path} alt="texto"/>
                    <p>Constant updates</p>
                </div>
                <div className={styles.active_item}>
                    <img src={check_path} alt="texto"/>
                    <p>Custom templates</p>
                </div>

                <div className={styles.preco}>
                    <h1>
                        ${preco3}
                    </h1>
                    <h6>
                    Per month
                    </h6>
                </div>

                <button className={styles.botao}>
                    <h2>try now</h2>
                </button>  

            </div>
                     
        </div>
        </div>
    )
}