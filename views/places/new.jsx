const React = require('react')
const Def = require('../default.jsx')



module.exports = edit_form

function new_form(data){
    return(
        <Def>
            <main>
                <h1>Add A New Place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                   <div className="form-group">
  <label for="founded">Founded Year</label>
  <input className="form-control" id="founded" name="founded" />
</div>

                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                        <input className="btn btn-primary" type="submit" value="Add Place" />
                        </form>
            </main>
        </Def>
    )
}

module.exports = new_form;

