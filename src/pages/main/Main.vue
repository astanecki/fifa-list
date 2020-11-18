<template>
    <v-container>
        <v-layout text-center wrap>
            <v-flex>
                <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        Functional areas
                    </v-col>
                    <v-col
                        cols="12"
                        sm="3"
                    >
                        <v-text-field
                            v-model="searchPhrase"
                            label="Search"
                            prepend-inner-icon="mdi-magnify"
                            clearable
                            solo
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="6"
                        sm="3"
                    >
                        <Button @click.native="onCreateButtonClick">{{ buttonLabel }}</Button>
                    </v-col>
                </v-row>
            </v-flex>

            <v-flex xs10 offset-xs1>
                <v-data-table
                    :headers="headers"
                    :items="list"
                    :search="searchPhrase"
                    :items-per-page="5"
                >
                    <template v-slot:item="row">
                        <tr>
                            <td>{{row.item.id}}</td>
                            <td>{{row.item.title}}</td>
                            <td>{{row.item.body}}</td>
                            <td>
                                <v-flex>
                                    <v-icon color="black">mdi-delete-outline</v-icon>
                                    <v-icon color="black">mdi-pencil</v-icon>
                                </v-flex>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';

import Button from '@/design/elements/button/Button';
import { FETCH_LIST } from '@/store/modules/main/actions/main.actions';

export default {
    components: {
        Button,
    },

    data: () => ({
        // todo i18n
        buttonLabel: 'Create',
        searchPhrase: '',
        headers: [
            { text: 'Ref. no.', align: 'center', value: 'id' },
            { text: 'Name', value: 'title', align: 'left' },
            { text: 'Type', value: 'body', align: 'left' },
        ],

    }),

    mounted() {
        this[FETCH_LIST]();
    },

    computed: {
        ...mapState('main', ['list']),
    },

    methods: {
        ...mapActions('main', [FETCH_LIST]),

        onCreateButtonClick() {
            this.$router.push('/edit');
        },
    }
};
</script>
