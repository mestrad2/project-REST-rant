const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={`${data.place.pic}`} />
                <h2 className='main'>{data.place.cuisines}</h2>
                <h4 className='main'>{data.place.city},{data.place.state}</h4>
                <h5 className='main'>
                    Rating
                    <input className="form-control" id="rating" />
                </h5>
                <h5 className='main'>
                    Comments
                    <input className="form-control" id="comments" />
                </h5>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>

            </main>
        </Def>
    )
}

module.exports = show
