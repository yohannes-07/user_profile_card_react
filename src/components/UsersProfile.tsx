import React from 'react';
import './styles.css';
import CardComponent from './Card';
import AvatarComponent from './Avatar';
import Info from './Info';
import yony from '../assets/yony.jpg';
import abel from '../assets/abel.jpeg';
import arsenal from '../assets/arsenal.jpg';
type Person = {
    name: string,
    bio: string,
    website?:string,
    image: string
    email: string
}

const users:Person[] = [
    {
        name: "Yohannes",
        bio: "A third year software engineering student. I am a full-stack software engineer and writer. ",
        website: "www.yohannesPortfolio.com",
        image: yony,
        email: 'yohannes.ahunm@a2sv.org'
    },
    {
        name: "Abel",
        bio: "A fith year computer science student.  I  am a full-stack software engineer and writer.",
        website: "www.abelPortfolio.com",
        image: abel,
        email: 'abel.ahunm@a2sv.org'
    },
    {
        name: "Trossard",
        bio: "Football player at Arsenal,Emirates. Hard worker and top goal assister of the last year ",
        website: "www.TrossardPortfolio.com",
        image: arsenal,
        email: 'trossard.ahunm@a2sv.org'
    }
]

const UsersProfile: React.FC = () => {
  return (
    <>
    <div className="profile_container">
       {
        users.map((user) => {
           return (
            <CardComponent key={user.name}>
                <AvatarComponent image={user.image} name={user.name}  />
                <Info name={user.name} bio={user.bio} website={user.website} email={user.email} />
            </CardComponent>
           )
        })
       }
     
    </div>
    </>
  )
}

export default UsersProfile