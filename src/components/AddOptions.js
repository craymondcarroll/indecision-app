import React from "react";


class AddOptions extends React.Component {

    state = {
        error: undefined

    };



    handleAddOption = (e) => {

        e.preventDefault();

        //-e.target points to the element that the even started on.
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);


        //- This is the same as below.
        this.setState( () => ({
            error
        }))


        /*
        this.setState( () =>{

            return {
                error
                // above is identical to error: error
            };

        });
*/

        if(!error) {
            e.target.elements.option.value = '';
        }



    }




    render() {

        return(
            <div>
                {this.state.error && <p className='add-option-error'> {this.state.error}</p>}

                <form  className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type="text" name="option"/>
                    <button className='button'>Add Options</button>
                </form>

            </div>

        );
    }
}


export default AddOptions;