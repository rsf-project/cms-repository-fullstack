PGDMP     $                    {            cms-repository    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16399    cms-repository    DATABASE     �   CREATE DATABASE "cms-repository" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Indonesian_Indonesia.1252';
     DROP DATABASE "cms-repository";
                postgres    false                        2615    16400    cms-repository    SCHEMA         CREATE SCHEMA "cms-repository";
    DROP SCHEMA "cms-repository";
                postgres    false            �            1259    16401    cms_article    TABLE     l  CREATE TABLE "cms-repository".cms_article (
    id integer NOT NULL,
    title character varying NOT NULL,
    slug character varying NOT NULL,
    html_content character varying NOT NULL,
    category_id integer NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    metadata json
);
 )   DROP TABLE "cms-repository".cms_article;
       cms-repository         heap    postgres    false    6            �            1259    16407    cms_article_id_seq    SEQUENCE     �   ALTER TABLE "cms-repository".cms_article ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "cms-repository".cms_article_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            cms-repository          postgres    false    6    215            �            1259    16408    cms_category    TABLE     �   CREATE TABLE "cms-repository".cms_category (
    id integer NOT NULL,
    title text NOT NULL,
    slug text NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone DEFAULT now()
);
 *   DROP TABLE "cms-repository".cms_category;
       cms-repository         heap    postgres    false    6            �            1259    16414    cms_categoryid_seq    SEQUENCE     �   ALTER TABLE "cms-repository".cms_category ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "cms-repository".cms_categoryid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            cms-repository          postgres    false    217    6            �            1259    16421    cms_user    TABLE     �   CREATE TABLE "cms-repository".cms_user (
    id integer NOT NULL,
    phone character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);
 &   DROP TABLE "cms-repository".cms_user;
       cms-repository         heap    postgres    false    6                      0    16401    cms_article 
   TABLE DATA           }   COPY "cms-repository".cms_article (id, title, slug, html_content, category_id, created_at, updated_at, metadata) FROM stdin;
    cms-repository          postgres    false    215   i                 0    16408    cms_category 
   TABLE DATA           Y   COPY "cms-repository".cms_category (id, title, slug, created_at, updated_at) FROM stdin;
    cms-repository          postgres    false    217   �       	          0    16421    cms_user 
   TABLE DATA           M   COPY "cms-repository".cms_user (id, phone, name, role, password) FROM stdin;
    cms-repository          postgres    false    219   M                  0    0    cms_article_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('"cms-repository".cms_article_id_seq', 35, true);
          cms-repository          postgres    false    216                       0    0    cms_categoryid_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('"cms-repository".cms_categoryid_seq', 55, true);
          cms-repository          postgres    false    218            r           2606    16416    cms_article cms_article_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY "cms-repository".cms_article
    ADD CONSTRAINT cms_article_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY "cms-repository".cms_article DROP CONSTRAINT cms_article_pkey;
       cms-repository            postgres    false    215            v           2606    16418    cms_category cms_category_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY "cms-repository".cms_category
    ADD CONSTRAINT cms_category_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY "cms-repository".cms_category DROP CONSTRAINT cms_category_pkey;
       cms-repository            postgres    false    217            t           2606    16420    cms_article slug 
   CONSTRAINT     U   ALTER TABLE ONLY "cms-repository".cms_article
    ADD CONSTRAINT slug UNIQUE (slug);
 D   ALTER TABLE ONLY "cms-repository".cms_article DROP CONSTRAINT slug;
       cms-repository            postgres    false    215               l  x���Qo�0���).<���$�d��d�e��Y�Ti��:G̾�Z)�K��!�w���hZ�}&�*�0cR=	J',#'Ov瓠�v2�Y�Ș��l�+�%����	 ���v�������3L���e��a����M�� �j���"��2��L�cG��C��Ý�E�[��8L�0��X$46�>h�Y����NUn~�We������Ҙ�Ļ���Z$�ث��,��*g����н���G��Z�km���,�x�q�<? 
wf�l��az���y�y.9o6x�^mnj5NK%�k!x�9�$�L'�T����u�&;���!�{�xC�p@�tfgb]{��׵���SqV�?�.��e� �Br         X   x�36��N,IM�/�T���M�̆�ts@<##c]3]CK+K+clb\F�c�KJK����dl�0ȥ�9)�Ļ&F��� �w6�      	   �   x���=�  ��~E�s"��X�a]Z�u5�Xr��(ev�������Q�|�y~�@��Ri6Hr]��2U��©��u�ŭL�5���8.��\����K���8�v]��0�5��Q<�5Cb�F]L	��:I3��U�|�;��]?X[�g�a�۳~ӳg������X�|��:ҋ\d$��6�7�4T�1<!�od%Ty     