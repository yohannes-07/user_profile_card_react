import React from 'react';
import './styles.css';
import CardComponent from './Card';
import AvatarComponent from './Avatar';
import Info from './Info';
import redWoman from '../assets/redWoman.jpeg';
import beautiful from '../assets/beauty.jpeg';
import sigma from '../assets/sigma.jpg';
type Person = {
    name: string,
    bio: string,
    website?:string,
    image: string
    email: string
}

const users:Person[] = [
    {
        name: "Sigma",
        bio: "A third year software engineering student. I am a full-stack software engineer and writer. ",
        website: "www.yohannesPortfolio.com",
        image: sigma,
        email: 'yohannes.ahunm@a2sv.org'
    },
    {
        name: "Jane",
        bio: "A fith year computer science student.  I  am a full-stack software engineer and writer.",
        website: "www.abelPortfolio.com",
        image: redWoman,
        email: 'abel.ahunm@a2sv.org'
    },
    {
        name: "Sarah",
        bio: "Football player at Arsenal,Emirates. Hard worker and top goal assister of the last year ",
        website: "www.TrossardPortfolio.com",
        image: beautiful,
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