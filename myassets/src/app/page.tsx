'use client'
import styles from '@/app/ui/styles/Home.module.css';
import MenuBar from '@/app/ui/components/menubar';


export default function Home() {

  return (
    
    <div className={styles.mydiv}>
      <MenuBar/>
      <div className={styles.mydiv_grid}> 

          <div className = {styles.mydiv_griditem}>
             Cash
          </div>
          <div className = {styles.mydiv_griditem}>
             Bond Mutual Funds
          </div>
          <div className = {styles.mydiv_griditem}>
             Stock Mutual Funds
          </div>
          <div className = {styles.mydiv_griditem}>
             Stocks
          </div>
          <div className = {styles.mydiv_griditem}>
             Real Estate
          </div>
          <div className = {styles.mydiv_griditem}>
             Crypto
          </div>
          
      </div>
    </div>
    
  )

}
