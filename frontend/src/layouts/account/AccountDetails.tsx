import { Dispatch, SetStateAction } from "react";

import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import ImageUpload from "../../components/form/ImageUpload";
import Button from "../../components/form/Button";

interface IAccountDetailsProps {
    username: string;
    avatar: string | File;
    setAvatar: Dispatch<SetStateAction<string | File>>;
    firstName: string;
    setFirstName: Dispatch<SetStateAction<string>>;
    lastName: string;
    setLastName: Dispatch<SetStateAction<string>>;
    email: string;
    occupation: string;
    setOccupation: Dispatch<SetStateAction<string>>;
    description: string;
    setDescription: Dispatch<SetStateAction<string>>;
    touched: boolean;
    loading: boolean;
    saveChanges: () => void;
}

const AccountDetails = (props: IAccountDetailsProps) => {
    return (
        <div className="p-5 border border-gray-300 rounded-3xl">
            <h2 className="mb-8 font-semibold text-[24px] text-center">Account Details</h2>
            <div className="flex flex-col gap-5 lg:flex-row lg:justify-center lg:gap-10">
                <div>
                    <ImageUpload title="Avatar" width={300} height={300} image={props.avatar} setImage={props.setAvatar} className="mb-5" />
                    <p className="font-semibold text-center text-[18px]">@{props.username}</p>
                </div>

                <div>
                    <div className="flex flex-col gap-3 mb-2 sm:flex-row">
                        <div>
                            <label htmlFor="firstNameInput" className="block mb-2 font-medium text-sm">
                                First Name
                            </label>
                            <Input
                                id="firstNameInput"
                                placeholder="Enter first name"
                                touched={props.touched}
                                value={props.firstName}
                                errorMessage="First name is not valid."
                                className="w-full"
                                validation={(value) => value.length >= 3}
                                onChange={props.setFirstName}
                            />
                        </div>

                        <div>
                            <label htmlFor="lastNameInput" className="block mb-2 font-medium text-sm">
                                Last Name
                            </label>
                            <Input
                                id="lastNameInput"
                                placeholder="Enter last name"
                                touched={props.touched}
                                value={props.lastName}
                                errorMessage="Last name is not valid."
                                className="w-full"
                                validation={(value) => value.length >= 3}
                                onChange={props.setLastName}
                            />
                        </div>
                    </div>

                    <label htmlFor="emailInput" className="block mb-2 font-medium text-sm">
                        Email
                    </label>
                    <Input id="emailInput" type="email" placeholder="Enter email" value={props.email} readOnly className="w-full mb-2" />

                    <label htmlFor="occupationInput" className="block mb-2 font-medium text-sm">
                        Occupation
                    </label>
                    <Input
                        id="occupationInput"
                        placeholder="Enter occupation"
                        touched={props.touched}
                        value={props.occupation}
                        errorMessage="Occupation is not valid."
                        className="w-full"
                        validation={(value) => value.length >= 3}
                        onChange={props.setOccupation}
                    />

                    <label htmlFor="descriptionInput" className="block my-2 font-medium text-sm">
                        Description
                    </label>
                    <Textarea
                        id="descriptionInput"
                        placeholder="Enter description"
                        touched={props.touched}
                        value={props.description}
                        errorMessage="Description is not valid."
                        className="w-full h-[120px]"
                        validation={(value) => value.length >= 3}
                        onChange={props.setDescription}
                    />

                    <Button
                        disabled={props.loading}
                        className="w-full mt-4 mb-3 px-4 text-[16px] text-white bg-green-500 enabled:hover:bg-green-600 disabled:bg-green-600"
                        onClick={props.saveChanges}
                    >
                        {props.loading ? "Saving Changes..." : "Save Changes"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AccountDetails;
