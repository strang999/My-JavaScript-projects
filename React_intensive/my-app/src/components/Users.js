import React from 'react';
import User from './User'
export default function Users() {
return(
    <div className="right">  
<User
            src="https://img.freepik.com/free-psd/modern-man-smiling_1194-11653.jpg?size=338&ext=jpg"
             alt="prince"
                name="i_am_man"          />

    <div className="users__block">
    <User
            src="https://img.freepik.com/free-psd/modern-man-smiling_1194-11653.jpg?size=338&ext=jpg"
             alt="prince"
                name="i_am_man"     
                min     />
                <User
            src="https://img.freepik.com/free-psd/modern-man-smiling_1194-11653.jpg?size=338&ext=jpg"
             alt="prince"
                name="i_am_man"    
                min      />
                <User
            src="https://img.freepik.com/free-psd/modern-man-smiling_1194-11653.jpg?size=338&ext=jpg"
             alt="prince"
                name="i_am_man"  
                min        />

    </div>
    </div>
)

}