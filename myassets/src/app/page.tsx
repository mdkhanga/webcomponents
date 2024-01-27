'use client'
import styles from '@/app/ui/styles/Home.module.css';
import MenuBar from '@/app/ui/components/menubar';


export default function Home() {

  return (
    
    <div className={styles.mydiv}>
      <MenuBar/>
      <div className={styles.mydiv_grid}> 

          <div className = {styles.mydiv_griditem}>
             
          </div>
          <div className = {styles.mydiv_griditem}>
             
          </div>
          <div className = {styles.mydiv_griditem}>
             
          </div>
          <div className = {styles.mydiv_griditem}>
             
          </div>
          <div className = {styles.mydiv_griditem}>
             
          </div>
          <div className = {styles.mydiv_griditem}>
             
          </div>
          
      </div>
    </div>
    
  )

}
