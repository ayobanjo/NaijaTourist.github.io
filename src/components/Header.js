import React from 'react';


function Header() {
    return(
        <header>
            <h1 className='App'>Naija Tourist Scope</h1>
            <form className='formInput'>
                <input
                    className='InputSpace'
                    type='text'
                    placeholder='Search for places..'>

                </input>
                <button
                    type='button'
                    className='btn'
                >Search
                </button>
            </form>
            <nav className ='navlink'>
                <a href='#'><button
                    className='btn'
                    type='button'>Northern</button>
                </a>
                <a href='#'><button
                    className='btn'
                    type='button'>Southern</button>
                </a>
                <a href='#'><button
                    className='btn'
                    type='button'>Western</button>
                </a>
                <a href='#'><button
                    className='btn'
                    type='button'>Eastern</button>
                </a>

            </nav>

        </header>
    )
    
}

export default Header;
