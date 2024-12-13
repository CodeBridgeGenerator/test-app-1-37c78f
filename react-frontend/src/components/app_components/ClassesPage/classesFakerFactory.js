
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
classId: faker.datatype.number(""),
className: faker.datatype.number(""),
roomNumber: faker.datatype.number(""),
teacherId: faker.datatype.number(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
