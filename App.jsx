import React, { useState } from 'react';
import { FaFolder, FaChevronRight } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

let folders = [
  // {
  //   name: "Home",
  //   folders: [{
  //     name: "Rich Des",
  //     folders: [
  //       { name: 'https://bunkr.black/v/Richh-Des-And-Aria-Six--After-Party-Threesome-5uW5gG3l.mp4' },
  //       { name: 'Dhoom 3' }
  //     ]
  //   },
  //   {
  //     name: "Music",
  //     folders: [
  //       { name: 'Fav', folders: [{ name: 'Best song ever' }, { name: 'Steal my girl' }] },
  //       { name: 'HipHop', folders: [{ name: 'RapGod' }, { name: 'See you again' }] }
  //     ]
  //   },
  //   {
  //     name: "Games",
  //     folders: [
  //       { name: 'FPP', folders: [{ name: 'Valorant' }, { name: 'CSGO' }] },
  //       { name: 'TPP', folders: [{ name: 'BGMI' }, { name: 'GTA V' }] }
  //     ]
  //   }]
  // }
  {
    name: "My Socials",
    folders: [{
      name: 'Github',
      folders: [{
        name: "https://github.com/GauravSinghdev"
      }]
    },
    {
      name: 'Twitter',
      folders: [{
        name: "https://twitter.com/codewithkara"
      }]
    }]
  }
]

const App = () => {
  return (
    <div className='p-8 w-[900px] mx-auto mt-[200px]'>
      <h1 className='text-6xl font-semibold text-center'>Recursive React Component</h1>
      <ul className='border-2 border-black/50 mt-10 p-4 w-[400px] mx-auto hover:border-4 hover:border-black/80'>
        {
          folders.map((folder) => (
            <Folder folder={folder} key={folder.name} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;

const Folder = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasSubFolders = folder.folders && folder.folders.length > 0;
  const isLink = (name) => /^https?:\/\//.test(name); // Check if the name is a URL

  return (
    <li className='my-1.5'>
      <span className='flex items-center gap-1.5'>
        {
          hasSubFolders && (
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaChevronRight className={`text-gray-500 ${isOpen ? 'rotate-90' : ''} transition-transform`} />
            </button>
          )
        }

        {
          hasSubFolders ? (
            <FaFolder className='text-xl text-sky-500' />
          ) : (
            <IoIosDocument className='text-xl text-gray-900' />
          )
        }
        
        {
          isLink(folder.name) ? (
            <a href={folder.name} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {folder.name}
            </a>
          ) : (
            folder.name
          )
        }
      </span>

      {
        isOpen && hasSubFolders && (
          <ul className='pl-6'>
            {
              folder.folders.map((subFolder) => (
                <Folder folder={subFolder} key={subFolder.name} />
              ))
            }
          </ul>
        )
      }
    </li>
  );
}
