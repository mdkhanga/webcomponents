'use client'
import styles from '@/app/ui/styles/Home.module.css';
import MenuBar from '@/app/ui/components/menubar';



export default function FLexDivs() {


  return (
    
    <div className={styles.mydiv}>
      
      <div className={styles.mydiv_cols}> 

          <div className = {styles.mydiv_cols_item}>
             x
          </div>
          <div className = {styles.mydiv_cols_item}>
             x
          </div>
          <div className = {styles.mydiv_cols_item}>
             x
          </div>
          
      </div>
    </div>
    
  )

}
