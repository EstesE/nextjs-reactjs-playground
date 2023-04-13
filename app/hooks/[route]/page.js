import styles from "../../page.module.css";

const Hooks = ( { params } ) => {
    const id = params.route;
    return (
        <main className={styles.main}>
            <div className={styles.description} style={{ placeContent: "center" }}>
                Testing Dynamic Routes: {id}
            </div>
        </main>
    );
};

export default Hooks;