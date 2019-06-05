import React from 'react'
import styles from './searchbar.css'

const SearchBar = (props) =>{
    return(
        <div className = "search-bar-container">
            <div className = "logo-section">
               <img className = "main-logo" src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAC0tLQaGhre3t78/Pzy8vKYmJjn5+f4+PimpqYmJiZJSUk1NTVhYWHj4+N4eHhpaWmBgYHLy8srKyuSkpIJCQnW1ta8vLyzs7NPT0/u7u4fHx+EhIRbW1tDQ0N0dHTGxsZERESioqKLi4uWlpY8PDwSEhJUVFQXFxc6ePn9AAAMCklEQVR4nO1d63aqvBZVK8hNripYFKWote//gsfLPm3BuUISokb6zR97j9GGNBOSdU8yGMjCNnMrGKdl5lT7OI6i47s3nU7dtzMWQxksLs+6p16892MUxfG+crIyHQdWbtrS4xSDYVz+DZKRM98Wm5kcE1F8zjbFdu6MksD4GcR9+J3/SZ24OLgPYdaEeyhiJ/0eyR2QB07xFGp1FE6Q34OenUyKx0zKdiyKSaJ6Ydr743NmJgX3uFfI0Sx1mJy3KEpTDb9l9GwqJKKlAo6Z92waTHhZN3pGeXg2hVYcSmndYQzG62cPnwvrsayCdKbPHjsnpo4UP8t/9sAF4FviBLPNs0cthI2wxFnqYr/wYrEU4meGzx6wBEIB3Wjqq+NZiLgpvihBforjj2ePVBofY64v+LoETxQ5vqLcFF25H5vCj8I43E0uWI5Esbw+uA7DMPKLzYe7khlI+0TlJfg58/zt3MnSQI0HQ44nSDNnvvW92aciilxqwgtP1BqRBKMOCTLMHvIT0ZDLzQnZf2XJQa8K8kfF9uqw86DiIMlU/VmLJeP61f1CeXwwKr8lnrJgGHAB2xad7ZJn8zvDSHYz5jg3Afks25uYBDrwO8MIJsyR+tSDDuOhVXxfmSkKM2YpE8JfHDMcXi95LAEOJAyhM4W2jcEIWYQSDubdYTE02xotqJJs/jl6+Oj5MKKtgBI0J6Nq0+xumZBuMAYZubAOt80zqq2r3xL8QULqxhulaFLr1tVxCf7Aoih6TdlPmWtTnb/gGQk1UevGm0G5FJ8dg+YPQEaIm8isSY+EeBG6StHfGBFjr88+wl5r8UQeCaPx/y8QerFmu5m4jaeXlMktnN22CCn5W9bsYYuVPlLGHq+vEmUWprcGcoJt1P2v54+wRfxACmyU21/Dim6lXwzHf/xx1Am9qY03UX3VxrWYNxcjXmW/bBXsbU00MdbyW01W1AWEQTL49/scFiLMdBEzSFUXjZdvQa+/yP81C2B0ZqfHFyT88nm9kbFDjRYBqw9dDG5CTjbDTViUXH19YwAnqa/HJ7SxmLyJ/BrQZin+iRLYQ/UMPrcI3giGw7TesIKNrr8bw9/p8QkJIXlGWBf1Bmx0jdfAZfj+FD5NGIN3kuGs0Ra2vC5EONM1maQDRj6m0RJO04tZZkCTjSvV+ADQBIcNMxwutoveDFAIyrtLjaoEGAwbFomFMruHs0aEmiRUnl1qSi5OScb/DW3kJl60OnSR5cqoGLDNc2F/kixHyyQ5l99zVt+TyuJmHWKJOSJ+oSw8c/lSeZJVsX/4bZysDn5cZUn+3YZ6nK7dnTYbw4DN+VPNwc9naky289gtZ+sRuxYWM2/rWGyOWJGfsW4+liDr+2S/2lvwc0WCxkxbMn2Xt7kDXvs3yHjorbTPUTBjaw9MNA8KFfxSh7e60XdSog+DzBdtb9cx+nOFOciRkN125zeORapTpzGlgFP8Eb9A6gXNxo8c+47z28eFYKfi1eFeiqUrjsYjmwv5iCc/PqAkUAckcqWNIZZvyKqMUEOoFQJs7HRSFuZOqprphNUOyRzgIkZQEkLNPh6k6MfUwueAzaoGaIeDpuqyvhZXxBSDqYl0UKIf0+UabBiDcdfa2xAV3qfrn2nxFVPKOkD9lTgzKh0pHXUv75+ibJBhVcezAbfwJgFp7uWouwxbc5L8TCqoIgbpwhbUmYPNIrk/MFa1f8EHyvFfKR+zJhD1VeGkjBxBdRtQcD1MK1BXexzDkOm+repPCKzqOzGGMWS4kujdkVWCGJRGYAINIYZZgWYYiwNksYo0JL4iMmEjyPBDOOvUTc1jiH5FY4CKR6MBirRtRBmOGMEGaawEvyJmeISB1EKQ4fg+m6QWYhIVhzzeB8jN8cUYjtsd+eFqE62rMrUs07LSslpHGw7JJKY0DOgCewOkxCIhhmaroncjp2zmW63SiVo3wPsi1g1mOIUMQyGGbaaauyT2ZJjBso2jSLGEAQtrFDCkSpKueNuyPbF0yxZSAkVZFEMY8RZgyLbVQlTJWkfJ9LcEliJm6MKg8k0oku4VxtK/wXV6hU0V1V3fkc09lgGKy71BhgJ1JgxV/3ZT9kKNzJh/0d1wK35cc9KVIVEQd4ZQ3BzGq/+BV57ehyEs8rjgXSzWk9LJ3t0zGZak2o5F03Nk0cVw1S6tmAyRwcXLkBYzMoWpdGd8bwszXECvkZchjEQKjKkO+n3xTXiDiFegH/Jt3jegTXuGbNkmNVE9zjcOEwCQIachgQtxTkJGNkVuU+KGU+1D86oLQ+KVz+Qj5imhNDgnhWqGKbbX3rrkjxOs+qd8L001Q8Kc6ZaZQzn3Ia9ho5ahQbmF3QricHnayVHk6VbxNyRUBad6JlHibrmmqVKGBmGwdS41gpUTZ9ON4yMq/oZQ7L11/YSnjwhdYq4QrlqGFnzVKrYRYdOGp65eLUMsSTskj7+BFziPNFXLEC4Xtyu7C2B4asvxoFKGsACJ06BtAzQvecq0lDKETrkrm/+vI0BeJ0/IQClDmC2MuPRyG/CGVp6MolKGMDmuqioVSjGOynOVDA2YWO2uDK+AwZG4fX4oZIiN0o2qvWAWSpNxmKYqv6GFyt9hsZkU0EI8tL8/lQyhuFurIHcBCl6v2gW1SoYwgKFuFwqUY+2hDJUMoWWlStAQLlS7RaiSIVEGqArwBbar/LszVLetFjouj2UITcc7M2w3elUyhH2p290OGUqO6r9vSKD/67D/srT/+rD/Nk3/7dLe+xZ/wD/svY//B+I0fyDW1v94af9j3v3PW/yB3FP/84e9zwH/hTx+32sx/kI9Te9rov5CXVv/axNfub60/zXC/arz7n+tfv/3W/y3Z4aN/u97Yu1d+5obXP08Y+8alyF/7fUF9h/2fw/ps/cBhwr3ASNx/Ff3cqvej78i9uO3HjqgZD++ijMVOI7e+T5TwXrwmQrvf+BcDCVnm2Rqj9+5QtXZJigLIsxQ6/NpEEOJ4LzGZwz1/5yo/p/11f/z2l7lzD1ZhtUfODfxNc6+5AJx9mWJfqzb+aV8IM4vfYUzaDlBUNH/HGFuwAU3xlchaXUWNDeIs6C1P8+bH8R53rqfyS4A4kx2vc/VFwJxrr7mdyMIgLobQfP7LQRA3W+h9R0lQiDvKNH7nhkBkPfM6H1XED/ou4LwfU+6XO/ID/q+J73v7OIHfWeX3veu8YO+d03nu/NEwLg7T+v7D7nBuv9Q6zssucG4w1Lve0h5wb6HVOu7ZDnBuktW9/uAucC+D1j3O5150HKns+b3crej7V5u/e9Wb0Xr3eo2NNykiygfDxxrP/5yH2B6Zrh6FXFK3N29/9WEKE97EQ/DIgJ7tVVGxIxUbPK5P4jorF9rRJWWSWdJHgiqKKu2xvC2zaHCgM39AMMzw9sNrfimyOFwqru0SajAc7Mc36TC8K7e0oa8a9a70eZkuYjWJjhhqwxh+gwFpC6YZpqab8YgI3MjB9C+pBoPP3WVqCNCyAzxJkHybuETQh0Xo8XIUq7hrGPVw3j6LcaEkaKk6nFYGfiVdAnIfWDGrFQ6mZRg5/smgS4CxwiwP/h/+OSTASpf/MFsl+jA0UhaspIbRrFMW/Wd61fP5mhUfkv5O7vqjzLefsGrxpbyzBQXbGtccVRAtOye5KoT8UInSxuJcKMB4fGzO8jTzAm5CjzaPD7KyWjic+b5292JaKAm5U8hD5LM2W19b0Zr9xqiVpnPS7GOlfuxKXw/jMP15Iz9ciSK5f7y5PrUh+8Xmw9XqrKqneCJIso0vgo+uLT2+HUpfnAmduUmqgbgmaIvTZGf4Ili1zrYZyAUs5yX99nKdD8shE/hytg2qm7YSAQFLVV7Cx4BX85Fd9RtEbkvppLnxBmDMSOwoRHWHcqbjJKMwGmDQ9nRocvEK7YfCU9B2sFc6qv/o6Wa6JFZ6ilW/VJhdMzeH1uven8o3ONedaDBTiaFLnbOophwnbghjDxwYOXNg1E4d4srXKRy6sTF4Tkz1j0U8XVnxv0Cftf4kBEkI2e+LTa8sZOO+Jxtiu3cGSXXkLRElEsOtpmfy+/LzKn2cRxFx3dvOp26b2fILdjF5Vn31Iv3foyiON5XTlaeC/vzDpX9/wOM2uTmZ9Dx9AAAAABJRU5ErkJggg==" /> 
               <img className = "text-logo" src = "https://fontmeme.com/images/instagram-new-logo.png" />
            </div>
            <form className = "search-input" onSubmit = {(event)=>{props.search(event)}}>
                <input 
                    value = {props.searchValue}
                    onChange = {props.changer}
                    type = "text"
                    placeholder = " Search... 🔍"
                    className = "search"
                   
                />    
            </form>
            <div className = "nav-icons">   
                <img className = "compass" src = "https://static.thenounproject.com/png/7039-200.png" />
                <img className = "heart" src = "https://imageog.flaticon.com/icons/png/512/30/30767.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" />
                <img className = "user" src = "https://static.thenounproject.com/png/550751-200.png" />
            </div>
        </div>
    )
}

export default SearchBar;